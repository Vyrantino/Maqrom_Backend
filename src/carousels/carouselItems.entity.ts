import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CarouselItems {
  @PrimaryGeneratedColumn()
  idCarouselItem: number; /* NO OLVIDES CAMBIARLO */ 

  @Column("varchar" , { length: 50 })
  route: string;

  @Column( "varchar" , { length: 30 , nullable : true } )
  title: string;

  @Column( "varchar" , { length: 80 , nullable : true } )
  content: string;

  @Column( "varchar" , { length: 255 } )
  img: string ; 

  @Column( "varchar" )
  article: string ;

}