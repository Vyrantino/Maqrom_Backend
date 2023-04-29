import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cards } from './cards/cards.entity';
import { CardsModule } from './cards/cards.module';
import { AuthsModule } from './auth/auth.module';
import { Auths } from './auth/auth.entity';



@Module({
  imports: [  
      
      TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'maqrom',
      entities: [Cards, Auths],
      synchronize: true, /* Desactivar cuando pase a modo produccion */
    }),
    CardsModule,
    AuthsModule
  ],
  controllers: [
    AppController ,
    
  ],
  providers: [AppService],
})
export class AppModule {
 

}
