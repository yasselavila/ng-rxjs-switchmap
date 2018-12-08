import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/services';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  // public users$;

  public constructor(private apiService: ApiService) {}

  public ngOnInit(): void {
    this.apiService.find('');
  }
}
