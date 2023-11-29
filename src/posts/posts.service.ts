import { Injectable, NotFoundException } from '@nestjs/common';

/**
 * author: string;
 * title: string;
 * content: string;
 * likeCount: number;
 * commentCount: number;
 */

export interface PostModel{
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
  

@Injectable()
export class PostsService {
    getAllPosts(){
        return posts;
    }

    getPostById(postId : number){
        const post = posts.find((post)=>post.id === postId);
        //포스트가 없을경우 에러 throw
        if (!post){
          throw new NotFoundException();
        }
    
        return post;
    }

    createPost(author: string, title: string, content: string){
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
    }

    updatePost(postId:number, author:string, title:string, content:string){
        const post = posts.find((post)=>post.id === postId);

        if(!post){
        throw new NotFoundException;
        };
        
        if(author){
        post.author = author;
        };

        if(title){
        post.title = title;
        }

        if(content){
        post.content = content;
        }

        posts = posts.map((prevPost) => prevPost.id === +postId ? post : prevPost);

        return post;
    }

    deletePost(postId:number){
        const post = posts.find((post) => post.id === postId);
        if(!post){
          throw NotFoundException;
        }
    
        posts = posts.filter((post) => post.id !== postId);
    
        return post;
    }
}
