import { Component, Input } from '@angular/core';
import { UserDetailsComponent } from '../user-details/user-details.component';

@Component({
  selector: 'app-user-card',
  imports: [UserDetailsComponent],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css',
  standalone: true
})
export class UserCardComponent {
  @Input() profileImage: string = "";
  @Input() userName: string = "";

}
