import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Card } from './card.entity';
import { Repository } from 'typeorm';
import { cqupt_user, cqupt_api } from '../grpc/generated';
import { GrpcClientFactory } from '../grpc/grpc.client-factory';
import { RpcException } from '@nestjs/microservices';
import { UserService } from 'src/user/user.service';
import { LocationService } from 'src/location/location.service';

@Injectable()
export class CardService {
  onModuleInit() {
    this.rpcCardService = this.grpcClientFactory.userModuleClient.getService('CardController')
    this.rpcApiService = this.grpcClientFactory.apiModuleClient.getService('QcloudsmsController')
  }

  constructor(
    @InjectRepository(Card) private readonly cardRepo: Repository<Card>,
    @Inject(GrpcClientFactory) private readonly grpcClientFactory: GrpcClientFactory,
    @Inject(UserService) private readonly userService: UserService,
    @Inject(LocationService) private readonly locationService: LocationService,
  ) { }
  private rpcCardService: cqupt_user.CardController
  private rpcApiService: cqupt_api.QcloudsmsController

  // async creatLostCard(stuNum: string, name: string, departmentId: string, stuId?: string, userId?: string) {
  //   try {
  //     const { code, card: remoteCard } = await this.rpcCardService.creatCard({ stuNum, name, departmentId, stuId, userId }).toPromise()
  //     if (code === 200) {
  //       let card = await this.cardRepo.save(this.cardRepo.create({ stuNum, status: 'lost', LostTime: new Date(), foundTime: new Date() }))
  //       card = { ...remoteCard, ...card }
  //       return { code: 2004, message: '丢失卡片创建成功', card }
  //     }
  //   } catch (error) {
  //     throw new RpcException(error)
  //   }
  // }

  // async findCardStatus(stuNum: string) {
  //   let card = await this.cardRepo.findOne({ where: { stuNum } })
  //   try {
  //     const { code, card: remoteCard } = await this.rpcCardService.findOneCard({ data: { stuNum } }).toPromise()
  //     if (card) {
  //       if (code === 200) {
  //         card = { ...card, ...remoteCard }
  //         return this.judgeCardStatus(card)
  //       }
  //     } else if (remoteCard) {
  //       card = await this.cardRepo.save(this.cardRepo.create({ stuNum, LostTime: new Date(), foundTime: new Date(), status: 'unknown' }))
  //       card = { ...card, ...remoteCard }
  //       return this.judgeCardStatus(card)
  //     }
  //     return { code: 404, message: '没有找到你的卡片' }
  //   } catch (error) {
  //     throw new RpcException(error)
  //   }
  // }

  async checkLocalCard(stuNum: string) {
    let card = await this.cardRepo.findOne(stuNum, {relations: ['foundLocation']})
    if (!card) {
      card = await this.cardRepo.save(this.cardRepo.create({ status: 'unknown', stuNum }))
    }
    return card
  }

  async findCardStatus(data: cqupt_user.FindOneCardReq) {
    // 在使用远程服务的时候必须包一个 try catch 以便于将错误传递到 公共网关
    try {
      const remoteCard = await this.rpcCardService.findOneCard(data).toPromise()
      const card =  await this.checkLocalCard(remoteCard.card.stuNum)
      return card
    } catch (error) {
      throw new RpcException(error)
    }
  }

  async changeCardStatus(stuNum: string, status: string, foundByUserId: string, locationId: string) {
    let card = await this.cardRepo.findOne(stuNum, { relations: ['foundBys', 'foundLocation'] })
    // if (!card) throw new RpcException({ code: 404,  message: '没有找到你的卡片' })

    if (!card) {
      card = await this.cardRepo.save(this.cardRepo.create({ status, stuNum }))
    }
    if (status === 'lost') card.lostAt = new Date()
    if (status === 'found') {
      card.foundAt = new Date()
      card.foundBys.push(await this.userService.findOneUserOrCreate(foundByUserId))
      card.foundLocation = await this.locationService.findLocation(locationId)
      const locationName = card.foundLocation.name
      const rpcCard = await this.rpcCardService.findOneCard({ stuNum }).toPromise()
      const mobile = rpcCard.card.user.mobile
      await this.rpcApiService.sendFoundCardNotice({ stuNum, mobile, locationName }).toPromise()
    }
    card.status = status
    card = await this.cardRepo.save(card)
    return card
  }
}
