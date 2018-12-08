import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './shared/models';
import { ApiService } from './shared/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public users$: Observable<User[]> = this.apiService.stream$;

  public constructor(private apiService: ApiService) {}

  public search(q: string): void {
    if ('string' !== typeof q) {
      return;
    }

    this.apiService.find(q);
  }
}
