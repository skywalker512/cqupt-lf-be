import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, PrimaryColumn, ManyToMany } from "typeorm"
import { Card } from "src/card/card.entity";


@Entity()
export class User {
  @PrimaryColumn()
  id: string

  @ManyToMany(type=>Card, card=>card.foundBys)
  foundCards: Card[]
}