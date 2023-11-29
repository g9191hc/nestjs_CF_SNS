import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { PostsService } from './posts.service';

// nest g resource 명령어로 posts 모듈 생성했음

// localhost:3000/posts
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

   
  // 1) GET /posts
  //    모든 post 리스트
  @Get()
  getPosts(){
    this.postsService.getAllPosts();
  }

  // 2) GET /posts/:id
  //    id에 해당하는 post
  @Get(':id')
  // 패스파라미터에서 :id에 해당하는 부분의 값을 id변수에 주입함.
  getPost(@Param('id') id: string){
    return this.postsService.getPostById(+id);
  }

  // 3) POST /posts
  //    post 생성
  @Post()
  postPosts(
    @Body('author') author: string,
    @Body('title') title: string,
    @Body('content') content: string,
  ){
    return this.postsService.createPost(author, title, content);
  };


  // 4) PUT /posts/:id
  //    id에 해당하는 post 변경
  @Put(':id')
  putPost(
    @Param('id') id: string,
    @Body('author') author?: string,
    @Body('title') title?: string,
    @Body('content') content?: string,
    ){
    this.postsService.updatePost(+id, author, title, content);
  }

  // 5) DELETE /posts/:id
  //    id에 해당하는 post 삭제
  @Delete(':id')
  deletePost(@Param('id') id:string){
    this.postsService.deletePost(+id);
  }
  

  // @Get()
  // getPost(): PostModel {
  //   return {
  //     author: 'Issac Go',
  //     title: 'Practice',
  //     content: 'Practice content',
  //     likeCount: 10000,
  //     commentCount: 9999
  //   };
  // }

}
