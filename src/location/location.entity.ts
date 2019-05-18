import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from "typeorm"
import { Card } from "src/card/card.entity";


@Entity()
export class LocationTag {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @OneToMany(type => FoundLocation, location => location.tag)
  locations: FoundLocation[]
}

@Entity()
export class FoundLocation {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @OneToMany(type => Card, card => card.foundLocation)
  cards: Card[]

  @ManyToOne(type => LocationTag, tag => tag.locations)
  tag: LocationTag
}