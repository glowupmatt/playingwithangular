import { NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css',
  imports: [NgFor, NgIf],
  standalone: true
})
export class CommentsComponent {
  comments: any[] = [];
  currentUser:any = {};
  isCommentsEmpty: boolean = true;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('assets/data.json').forEach(
      (data) => {
        this.comments = data.comments;
        this.currentUser = data.currentUser;
        this.isCommentsEmpty = this.comments.length === 0;
      },
    );
  }
  

  logComments(): void {
    console.log(this.comments);
    console.log(this.currentUser);
  }

}
