import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Videos {
  @PrimaryGeneratedColumn()
  idVideo: number;

  @Column( "varchar" , { length : 150 } ) 
  url: string;

  @Column( "varchar" , { length : 150 , nullable: true } )
  alt: string;

}