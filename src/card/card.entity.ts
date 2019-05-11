import { Entity, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, PrimaryColumn, OneToOne } from "typeorm"

enum Status {
  Lost = 'Lost',
  Found = 'Found',
  Null = 'Null',
}

@Entity()
export class Card {
  @PrimaryColumn({ unique: true })
  id: string

  @Column()
  status: Status

  @Column()
  LostTime: Date

  @Column()
  foundTime: Date
}