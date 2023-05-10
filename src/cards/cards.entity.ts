import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cards {
  @PrimaryGeneratedColumn()
  idCard: number;

  @Column("varchar" , { length: 50 })
  route: string;

  @Column("varchar", { length: 255 , nullable: true })
  img: string;

  @Column( "varchar" , { length: 30 } )
  title: string;

  @Column( "varchar" , { length: 255 } )
  content: string;
  
  @Column( { default: false  } )
  isLocked: boolean;
}