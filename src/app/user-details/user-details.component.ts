import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-details',
  imports: [NgIf],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {
  @Input() profileImage: string = "";
  @Input() userName: string = "";

  isUserJuliusomo(): boolean {
    return this.userName === "juliusomo";
  }
}
