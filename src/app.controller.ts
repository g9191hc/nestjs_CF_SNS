import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

/**
 * author: string;
 * title: string;
 * content: string;
 * likeCount: number;
 * commentCount: number;
 */

interface Post{
  author: string;
  title: string;
  content: string;
  likeCount: number;
  commentCount: number;
}

@Controller('post')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getPost(): Post {
    return {
      author: 'Issac Go',
      title: 'Practice',
      content: 'Practice content',
      likeCount: 10000,
      commentCount: 9999
    };
  }
}
