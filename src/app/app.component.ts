import { Component } from '@angular/core';

export interface Post {
  title: string;
  text: string;
  id?: number;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: Post[] = [
    {
      title: 'Post Title',
      text: 'Text of post',
      id: 1
    },
    {
      title: 'Post2 Title',
      text: 'Text of post 2',
      id: 2
    }
  ];

  updatePosts(post) {
    this.posts.unshift(post);
  }

  remuvePost(id): void {
    this.posts = this.posts.filter(el => el.id !== id);
  }
}
