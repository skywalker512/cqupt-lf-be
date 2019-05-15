import { Controller, Inject } from '@nestjs/common';
import { CardService } from './card.service';
import { GrpcMethod } from '@nestjs/microservices';
import { Card } from './card.entity';

@Controller('card')
export class CardController {
  constructor(
    @Inject(CardService) private readonly cardService: CardService
  ) { }

  // @GrpcMethod()
  // async creatLostCard(payload: {stuNum: string, name: string, departmentId: string, stuId?: string, userId?: string}) {
  //   const { stuNum, name, departmentId, stuId, userId } = payload
  //   return await this.cardService.creatLostCard(stuNum, name, departmentId, stuId, userId)
  // }

  @GrpcMethod()
  async findCardStatus(payload: { stuNum?: string, stuId?: string, name?: string, userId?: string}) {
    let data: any
    if(Object.keys(payload).includes('userId')) {
      data = { user: payload.userId }
    } else {
      data = payload
    }
    const card = await this.cardService.findCardStatus(data)
    return this.judgeCardStatus(card)
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
