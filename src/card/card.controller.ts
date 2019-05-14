import { Controller, Inject } from '@nestjs/common';
import { CardService } from './card.service';
import { GrpcMethod } from '@nestjs/microservices';

@Controller('card')
export class CardController {
  constructor(
    @Inject(CardService) private readonly cardService: CardService
  ) { }

  @GrpcMethod()
  async creatLostCard(payload: {stuNum: string, name: string, departmentId: string, stuId?: string, userId?: string}) {
    const { stuNum, name, departmentId, stuId, userId } = payload
    return await this.cardService.creatLostCard(stuNum, name, departmentId, stuId, userId)
  }

  @GrpcMethod()
  async findCardStatus(payload: {stuNum: string }) {
    const { stuNum } = payload
    return await this.cardService.findCardStatus(stuNum)
  }
}
