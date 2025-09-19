
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Contractno {
  id: number;
 }

@Injectable({
  providedIn: 'root',
})
export class ContractnoService {
  private readonly apiUrl = 'api/contractnos';

  constructor(private readonly http: HttpClient) {}

  getContractnos(): Observable<Contractno[]> {
    // console.log('Get Contractno start:',this.apiUrl);
    return this.http.get<Contractno[]>(this.apiUrl);
  }

  
  getConctractnoByCustomerNo(customerno: string): Observable<Contractno[]> {
    const url = `${this.apiUrl}/?customerno=${customerno}`;
    return this.http.get<Contractno[]>(url);
  }

}
