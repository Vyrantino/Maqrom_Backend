import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity()
@Unique([ "galleryName" ])
export class Galleries {
  @PrimaryGeneratedColumn()
  idGallery: number;

  @Column("varchar" , { name: "galleryName" })
  galleryName: string;

}