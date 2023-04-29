import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Images {
  @PrimaryGeneratedColumn()
  idImage: number;

  @Column( "varchar" , { length: 150 } )
  img: string;

  @Column( "varchar" , { length: 40 , nullable : true } )
  alt: string;

}