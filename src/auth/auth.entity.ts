import { Entity , Column , PrimaryGeneratedColumn } from 'typeorm' ; 

@Entity()
export class Auths{
    @PrimaryGeneratedColumn()
    idAuth: number ; 

    @Column( 'varchar' , { length: 100 } )
    email: string ; 

    @Column( 'varchar' , { length: 20 } )
    username: string ; 

    @Column( 'varchar' , { length: 255 } )
    password: string ; 

    
}