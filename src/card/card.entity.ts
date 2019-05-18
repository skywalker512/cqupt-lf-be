import { Entity, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, PrimaryColumn, OneToOne, ManyToMany, JoinTable } from "typeorm"
import { FoundLocation } from "src/location/location.entity";
import { User } from "src/user/user.entity";

@Entity()
export class Card {
  @PrimaryColumn({ unique: true })
  stuNum: string
  // lost found unknown
  @Column()
  status: string

  @ManyToOne(type=> FoundLocation, foundLocation=>foundLocation.cards)
  foundLocation: FoundLocation

  @ManyToMany(type=>User, user=>user.foundCards)
  @JoinTable()
  foundBys: User[]


  @Column({ nullable: true })
  lostAt: Date

  @Column({ nullable: true })
  foundAt: Date
}