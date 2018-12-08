import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { User } from '../../models';

/* Avoid scrappers */
const API_TOKEN: string = ('62d51da61cf128582048' + '587092e94454ae7a19f7')
  .split('')
  .reverse()
  .join('');

const API_URL = 'https://api.github.com';

@Injectable({ providedIn: 'root' })
export class ApiService {
  public loading$: Subject<boolean> = new Subject<boolean>();
  public data$: Subject<User[]> = new Subject<User[]>();

  public constructor(private httpClient: HttpClient) {}

  public find(userQuery: string): void {
    this.loading$.next(true);

    const headers: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${API_TOKEN}`,
      Accept: 'application/vnd.github.v3+json'
    });

    const q = encodeURIComponent(userQuery);
    const url = `${API_URL}/search/users?q=${q}`;

    this.httpClient
      .get<User[]>(url, { headers })
      .pipe(
        map((data: any) => data.items),
        take(1)
      )
      .subscribe((data: User[]) => {
        this.loading$.next(false);
        this.data$.next(data);
      });
  }
}
