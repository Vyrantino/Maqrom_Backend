import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Articles } from './articles.entity';
import { CreateArticleDto  } from './dto/create-article.dto' ;
import { UpdateArticleDto  } from './dto/update-article.dto' ;  

@Injectable()
export class ArticlesService {
  constructor(
    @InjectRepository(Articles)
    private articlesRepository: Repository<Articles>,
  ) {}

  createArticle( article: CreateArticleDto ){
    const newPaper = this.articlesRepository.create( article ) ;
    return this.articlesRepository.save( newPaper ) ;
  }

  getArticles(): Promise<Articles[]> {
    return this.articlesRepository.find();
  }


  getArticle(articleName: string): Promise<Articles | null> {
    return this.articlesRepository.findOne( { where: { articleName: articleName } } );
  }


  async deleteArticle(articleName: string): Promise<void> {
    await this.articlesRepository.delete( { articleName } );
  }

  updateArticle( articleName: string, article: UpdateArticleDto ){
    return this.articlesRepository.update( { articleName } , article )
  }
}