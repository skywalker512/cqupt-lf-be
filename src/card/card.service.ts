import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Card } from './card.entity';
import { Repository } from 'typeorm';
import { cqupt_user } from '../grpc/generated';
import { GrpcClientFactory } from '../grpc/grpc.client-factory';
import { RpcException } from '@nestjs/microservices';

@Injectable()
export class CardService {
  onModuleInit() {
    this.userService = this.grpcClientFactory.userModuleClient.getService('UserController');
    this.cardService = this.grpcClientFactory.userModuleClient.getService('CardController')
  }

  constructor(
    @InjectRepository(Card) private readonly cardRepo: Repository<Card>,
    @Inject(GrpcClientFactory) private readonly grpcClientFactory: GrpcClientFactory
  ) { }
  private userService: cqupt_user.UserController
  private cardService: cqupt_user.CardController

  async creatLostCard(stuNum: string, name: string, departmentId: string, stuId?: string, userId?: string) {
    try {
      const { code, card: remoteCard } = await this.cardService.creatCard({ stuNum, name, departmentId, stuId, userId }).toPromise()
      if (code === 200) {
        let card = await this.cardRepo.save(this.cardRepo.create({ stuNum, status: 'lost', LostTime: new Date(), foundTime: new Date() }))
        card = { ...remoteCard, ...card }
        return { code: 2004, message: '丢失卡片创建成功', card }
      }
    } catch (error) {
      throw new RpcException(error)
    }
  }

  async findCardStatus(stuNum: string) {
    let card = await this.cardRepo.findOne({ where: { stuNum } })
    try {
      const { code, card: remoteCard } = await this.cardService.findOneCard({ data: { stuNum } }).toPromise()
      if (card) {
        if (code === 200) {
          card = { ...card, ...remoteCard }
          return this.judgeCardStatus(card)
        }
      } else if (remoteCard) {
        card = await this.cardRepo.save(this.cardRepo.create({ stuNum, LostTime: new Date(), foundTime: new Date(), status: 'unknown' }))
        card = { ...card, ...remoteCard }
        return this.judgeCardStatus(card)
      }
      return { code: 404, message: '没有找到你的卡片' }
    } catch (error) {
      throw new RpcException(error)
    }
  }

  judgeCardStatus(card: Card) {
    if (card.status === 'found') {
      return { code: 2001, message: '你的卡片已找到', card }
    } else if (card.status === 'lost') {
      return { code: 2002, message: '你的卡片未找到', card }
    } else if (card.status === 'unknown') {
      return { code: 2003, message: '你的卡片状态未知', card }
    }
  }
}
