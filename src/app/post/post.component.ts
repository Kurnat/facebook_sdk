import { Component, OnInit, Input, ContentChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Post } from '../app.component';



@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() post: Post;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onDeletePost: EventEmitter<number> = new EventEmitter<number>();
  @ContentChild('short', { static: false }) infoRef: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  deletePost(id: number): void {
    this.onDeletePost.emit(id);
    console.log(id);

  }

}
