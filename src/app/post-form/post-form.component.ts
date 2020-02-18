import { Component, OnInit, Output, ViewChild, ElementRef } from '@angular/core';
import { Post } from '../app.component';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  // tslint:disable-next-line:no-output-on-prefix
  @Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>();
  @ViewChild('titleInput', { static: false }) inputRef: ElementRef;

  title = '';
  text = '';
  constructor() { }

  ngOnInit(): void {
  }

  addPost(): void {
    if (this.title.trim() && this.text.trim()) {
      const post: Post = {
        title: this.title,
        text: this.text
      };
      this.onAdd.emit(post);
      console.log('New Post: ', post);
      this.title = this.text = '';
    }
  }

  focusTitle(): void {
    this.inputRef.nativeElement.focus();
  }
}
