import { Controller, Inject } from '@nestjs/common';
import { CardService } from './card.service';
import { GrpcMethod } from '@nestjs/microservices';
import { Card } from './card.entity';

@Controller('card')
export class CardController {
  constructor(
    @Inject(CardService) private readonly cardService: CardService
  ) { }

  @GrpcMethod()
  async findCardStatus(payload: { stuNum?: string, stuId?: string, name?: string, userId?: string}) {
    const card = await this.cardService.findCardStatus(payload)
    return this.judgeCardStatus(card)
  }

  @GrpcMethod()
  async changeCardStatus(payload: {stuNum: string, status: string, foundByUserId?:string, locationId?: string}) {
    const { stuNum, status, foundByUserId, locationId } = payload
    const card = await this.cardService.changeCardStatus(stuNum, status, foundByUserId, locationId)
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
