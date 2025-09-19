
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ContracList {
  id: number;
 }

@Injectable({
  providedIn: 'root',
})
export class ContractListService {
  private readonly apiUrlcard = 'api/cards';
  private readonly apiUrlcapu1 = 'api/capu1s';
  private readonly apiUrlcapu2 = 'api/capu2s';
  private readonly apiUrlsenso = 'api/seisos';
  private readonly apiUrlyoshin = 'api/yoshins';

  constructor(private readonly http: HttpClient) {}

   
  getCardByCustomerNo(customerno: string): Observable<ContracList[]> {
    const url = `${this.apiUrlcard}/?customerno=${customerno}`;
    return this.http.get<ContracList[]>(url);
  }

  getCapu1ByCustomerNo(customerno: string): Observable<ContracList[]> {
    const url = `${this.apiUrlcapu1}/?customerno=${customerno}`;
    return this.http.get<ContracList[]>(url);
  }

  getCapu2ByCustomerNo(customerno: string): Observable<ContracList[]> {
    const url = `${this.apiUrlcapu2}/?customerno=${customerno}`;
    return this.http.get<ContracList[]>(url);
  }

  getSensoByCustomerNo(customerno: string): Observable<ContracList[]> {
    const url = `${this.apiUrlsenso}/?customerno=${customerno}`;
    return this.http.get<ContracList[]>(url);
  }

  getYoshinByCustomerNo(customerno: string): Observable<ContracList[]> {
    const url = `${this.apiUrlyoshin}/?customerno=${customerno}`;
    return this.http.get<ContracList[]>(url);
  }

}
