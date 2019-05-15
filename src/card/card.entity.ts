import { Entity, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, PrimaryColumn, OneToOne } from "typeorm"

@Entity()
export class Card {
  @PrimaryColumn({ unique: true })
  stuNum: string
  // lost found unknown
  @Column()
  status: string

  @Column({ nullable: true })
  lostAt: Date

  @Column({ nullable: true })
  foundAt: Date
}