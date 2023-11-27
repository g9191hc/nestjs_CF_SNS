import { Controller, Get } from '@nestjs/common';
import { PostsService } from './posts.service';

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

// localhost:3000/posts
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

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
