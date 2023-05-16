import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Papers {
  @PrimaryGeneratedColumn()
  idPaper: number;

  @Column( "varchar" , { length : 255 } )
  img: string;

  @Column( "varchar" , { length : 30 } )
  title: string;

  @Column( "varchar" , { length : 255 , } )
  content: string;

  @Column( "varchar" , { length: 255 , nullable : true  } )
  link: string;

  @Column( "varchar" )
  article: string ;
 
}