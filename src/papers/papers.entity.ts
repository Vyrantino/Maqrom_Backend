import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Papers {
  @PrimaryGeneratedColumn()
  idPaper: number;

  @Column( "varchar"  )
  route: string;

  @Column( "varchar"  )
  img: string;

  @Column( "varchar" )
  title: string;

  @Column( "varchar"  )
  content: string;

  @Column( "varchar" , {  nullable : true  } )
  link: string;

  @Column( "varchar" )
  article: string ;
 
}