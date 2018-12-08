import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './shared/models';
import { ApiService } from './shared/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public users$: Observable<User[]>;

  public constructor(private apiService: ApiService) {}

  public ngOnInit(): void {
    this.apiService.find('');
  }

  public search(q: string): void {
    this.users$ = this.apiService.find(q);
  }
}
