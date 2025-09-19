
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
  id: number;
 }

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly apiUrl = 'api/users';

  constructor(private readonly http: HttpClient) {}

  getUsers(): Observable<User[]> {
    // console.log('Get user start:',this.apiUrl);
    return this.http.get<User[]>(this.apiUrl);
  }

  
  getUserByCustomerNo(customerno: string): Observable<User[]> {
    const url = `${this.apiUrl}/?customerno=${customerno}`;
    return this.http.get<User[]>(url);
  }

}
