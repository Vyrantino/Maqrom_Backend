import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Images {
  @PrimaryGeneratedColumn()
  idImage: number;

  @Column( "varchar"  )
  name: string ;

  @Column( "varchar" )
  path: string ;

  @Column( "varchar" )
  type: string ;

  @Column( "varchar" )
  modified: string ;

  @Column( "varchar" , { length: 40 , nullable : true } )
  alt: string;

}