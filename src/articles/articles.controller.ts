import { 
  Body, 
  Controller, 
  Get , 
  Post ,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { Articles } from './articles.entity';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';

import { ApiBearerAuth , ApiTags } from '@nestjs/swagger';



@ApiBearerAuth()
@ApiTags( 'Articles' )
@Controller('articles')
export class ArticlesController {
  constructor( private articlesService: ArticlesService ){}

      @Get()
        getArticles(): Promise<Articles[]> {
        return this.articlesService.getArticles() ;
      }

      @Post()
      createArticle( @Body() newArticle: CreateArticleDto ){
        return this.articlesService.createArticle( newArticle );

      }

      @Delete(':name')
      deleteArticle( @Param( 'name' ) articleName: string){
          return this.articlesService.deleteArticle( articleName ) ;
      }

      @Patch( 'patch/:name' )
      updateArticle( @Param( 'name'  ) articleName: string , @Body()
        article: UpdateArticleDto
      ){
        return this.articlesService.updateArticle( articleName , article) ;

      }

}