import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Papers {
  @PrimaryGeneratedColumn()
  idPaper: number;

  @Column( "varchar" , { length : 150 } )
  icon: string;

  @Column( "varchar" , { length : 30 } )
  title: string;

  @Column( "varchar" , { length : 255 , } )
  content: string;

  @Column( "varchar" , { length: 150 , nullable : true  } )
  link: string;
 
}