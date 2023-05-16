import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity()
@Unique([ "articleName" ])
export class Articles {
  @PrimaryGeneratedColumn()
  idArticle: number;

  @Column("varchar" , { name: "articleName" })
  articleName: string;

}