import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../../models';

const BASE_URL = 'https://api.github.com/search/users';

@Injectable({ providedIn: 'root' })
export class ApiService {
  public stream$: Subject<User[]> = new Subject<User[]>();

  public constructor(private httpClient: HttpClient) {}

  public find(userQuery: string): void {
    const q = encodeURIComponent(userQuery);
    const url = `${BASE_URL}?q=${q}`;

    this.httpClient
      .get<User[]>(url)
      .pipe(map((data: any) => data.items))
      .subscribe((data: User[]) => {
        this.stream$.next(data);
      });
  }
}
