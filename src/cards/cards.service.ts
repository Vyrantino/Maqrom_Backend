import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cards } from './cards.entity';
import { CreateCardDto  } from './dto/create-card.dto' ;
import { UpdateCardDto  } from './dto/update-card.dto' ;  

@Injectable()
export class CardsService {
  constructor(
    @InjectRepository(Cards)
    private cardsRepository: Repository<Cards>,
  ) {}

  createCard( card: CreateCardDto ){
    const newCard = this.cardsRepository.create( card ) ;
    return this.cardsRepository.save( newCard ) ;
  }

  getCards(): Promise<Cards[]> {
    return this.cardsRepository.find();
  }

  getRouteCards( ): Promise<Cards[]>{
    return this.cardsRepository.find( { where: { route: "Nosotros" } } ) ;

  }

  getCard(idCard: number): Promise<Cards | null> {
    return this.cardsRepository.findOneBy({ idCard });
  }

  async deleteCard(idCard: number): Promise<void> {
    await this.cardsRepository.delete(idCard);
  }

  updateCard( idCard: number, card: UpdateCardDto ){
    return this.cardsRepository.update( { idCard } , card )

  }
}