import { Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { PostsService } from './posts.service';

// nest g resource 명령어로 posts 모듈 생성했음

/**
 * author: string;
 * title: string;
 * content: string;
 * likeCount: number;
 * commentCount: number;
 */

interface PostModel{
  id: number;
  author: string;
  title: string;
  content: string;
  likeCount: number;
  commentCount: number;
}

let posts : PostModel[] = [
  {
    id: 1,
    author: 'post1 author',
    title: 'post1 title',
    content: 'post1 author',
    likeCount: 1,
    commentCount: 1,
  },
  {
    id: 2,
    author: 'post2 author',
    title: 'post2 title',
    content: 'post2 author',
    likeCount: 2,
    commentCount: 2,
  },
  {
    id: 3,
    author: 'post3 author',
    title: 'post3 title',
    content: 'post3 author',
    likeCount: 3,
    commentCount: 3,
  },
]

// localhost:3000/posts
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

   
  // 1) GET /posts
  //    모든 post 리스트
  @Get()
  getPosts(){
    return posts;
  }

  // 2) GET /posts/:id
  //    id에 해당하는 post
  @Get(':id')
  // 패스파라미터에서 :id에 해당하는 부분의 값을 id변수에 주입함.
  getPost(@Param('id') id: string){
    const post = posts.find((post)=>post.id === +id);
    //포스트가 없을경우 에러 throw
    if (!post){
      throw new NotFoundException();
    }

    return post;
  }

  // 3) POST /posts
  //    post 생성
  @Post()
  postPosts(
    @Body('author') author: string,
    @Body('title') title: string,
    @Body('content') content: string,
  ){
    const post: PostModel = {
      id: posts[posts.length - 1].id + 1,
      author,
      title,
      content,
      likeCount: 0,
      commentCount: 0,
    };

    posts = [
      ...posts,
      post
    ];

    return post;
  };


  // 4) PUT /posts/:id
  //    id에 해당하는 post 변경
  // 5) DELETE /posts/:id
  //    id에 해당하는 post 삭제
  

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
