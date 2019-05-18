import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FoundLocation, LocationTag } from './location.entity';
import { Repository } from 'typeorm';
import { RpcException } from '@nestjs/microservices';

@Injectable()
export class LocationService {
  constructor(
    @InjectRepository(FoundLocation) private readonly locationRepo: Repository<FoundLocation>,
    @InjectRepository(LocationTag) private readonly locationTagRepo: Repository<LocationTag>,
  ){}

  async creatLocation(name: string, tagId: string) {
    if (await this.locationRepo.findOne({ where: { name } })) throw new RpcException({ code: 409, message: '地点已存在' })
    const tag = await this.locationTagRepo.findOne(tagId)
    if (!tag) throw new RpcException({ code: 404, message: '地点节点找不到' })
    const location = await this.locationRepo.save(this.locationRepo.create({ name, tag }))
    return location
  }

  async creatLocationTag(name: string) {
    if (await this.locationTagRepo.findOne({ where: { name } })) throw new RpcException({ code: 409, message: '地点节点已存在' })
    const locationTag = await this.locationTagRepo.save(this.locationTagRepo.create({ name }))
    return locationTag
  }

  async findAllLocationWithTags() {
    const locationWithTags = await this.locationTagRepo.find({relations: ['locations']})
    return locationWithTags
  }

  async findLocation(id: string) {
    const location = await this.locationRepo.findOne(id)
    return location
  }
}
