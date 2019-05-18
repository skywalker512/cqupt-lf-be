import { Controller, Inject } from '@nestjs/common';
import { LocationService } from './location.service';
import { GrpcMethod } from '@nestjs/microservices';

@Controller('location')
export class LocationController {
  constructor(
    @Inject(LocationService) private readonly locationSerivce: LocationService
  ) {}

  @GrpcMethod()
  async creatLocation(payload: {name: string, tagId: string}) {
    const { name, tagId } = payload
    const location = await this.locationSerivce.creatLocation(name, tagId)
    return { code: 200, message: '地点创建成功', location }
  }

  @GrpcMethod()
  async creatLocationTag(payload: {name: string}) {
    const { name } = payload
    const locationTag = await this.locationSerivce.creatLocationTag(name)
    return { code: 200, message: '地点创建成功', locationTag }
  }

  @GrpcMethod()
  async findAllLocationWithTags() {
    const locationWithTags = await this.locationSerivce.findAllLocationWithTags()
    return { code: 200, message: '所有地点查询成功', locationWithTags }
  }
}
