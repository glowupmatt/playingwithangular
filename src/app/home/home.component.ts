import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommentsComponent } from '../comments/comments.component';
import { UserCardComponent } from '../user-card/user-card.component';

@Component({
  selector: 'app-home',
  imports: [NgIf, NgFor, CommentsComponent, UserCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  comments: any[] = [];
  currentUser: any = {};
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
