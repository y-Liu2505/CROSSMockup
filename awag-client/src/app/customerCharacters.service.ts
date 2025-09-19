
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class CustomerCharacters {
  private readonly apiUrl = 'api/customerCharacters';

  constructor(private readonly http: HttpClient) {}

  getcustomerCharacters(): Observable<any[]> {
    // console.log('Get Contract history start:',this.apiUrl);
    return this.http.get<any[]>(this.apiUrl);
  }

  
  // getContactHistoryByCustomerNo(customerno: string): Observable<any[]> {
  //   const url = `${this.apiUrl}/?customerno=${customerno}`;
  //   return this.http.get<any[]>(url);
  // }

}