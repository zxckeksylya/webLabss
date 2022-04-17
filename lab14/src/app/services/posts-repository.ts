import { Injectable, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { StaticData } from './staticData';

@Injectable({
  providedIn: 'root',
})
export class PostReposytory implements OnInit {
  private posts: Post[] = [];
  constructor(private data: StaticData) {
    this.data.getData().forEach(p=>this.posts.push(p));
  }

  ngOnInit(): void {  }

  getPosts(): Post[] {
    return this.posts!;
  }

  getPost(id: number): Post {
    return this.posts.find((p) => p.id == id)!;
  }
  deletePost(id: number): void {
    let index = this.posts.findIndex((p) => p.id == id)!;
    this.posts.splice(index, 1);
  }
  addPost(newPost: Post): void {
    if (newPost.id == 0 || newPost.id == null) {
      newPost.id = this.generateID();
    }
    newPost.date = new Date();
    this.posts.push(newPost);
  }

  private generateID(): number {
    let candidate: number = 100;
    while (this.getPost(candidate) != null) {
      candidate++;
    }
    return candidate;
  }
}
