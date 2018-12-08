import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models';

const BASE_URL = 'https://api.github.com/search/users';

@Injectable({ providedIn: 'root' })
export class ApiService {
  public constructor(private httpClient: HttpClient) {}

  public find(userQuery: string): Observable<User[]> {
    const q = encodeURIComponent(userQuery);
    const url = `${BASE_URL}?q=${q}`;

    return this.httpClient.get<User[]>(url);
  }
}
