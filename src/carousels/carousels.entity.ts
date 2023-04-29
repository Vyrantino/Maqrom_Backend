import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Carousels {
  @PrimaryGeneratedColumn()
  idCarousel: number; /* NO OLVIDES CAMBIARLO */ 

  @Column("varchar" , { length: 50 })
  route: string;

  @Column("varchar", { length: 150 , nullable: true })
  img1: string;

  @Column("varchar", { length: 150 , nullable: true })
  img2: string;

  @Column("varchar", { length: 150 , nullable: true })
  img3: string;

  @Column( "varchar" , { length: 30 , nullable : true } )
  title: string;

  @Column( "varchar" , { length: 80 , nullable : true } )
  content: string;

}