import { Component, Input } from '@angular/core';
import { User } from '../../shared/models';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent {
  @Input()
  public users: User[];

  public trackUser(index: number, user: User): any {
    return user.login;
  }
}
