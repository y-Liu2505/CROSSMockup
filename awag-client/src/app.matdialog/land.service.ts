
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Land {
  department: string;
 }

@Injectable({
  providedIn: 'root',
})
export class LandService {
  private readonly apiUrl = 'api/lands';

  constructor(private readonly http: HttpClient) {}

  getLands(): Observable<Land[]> {
    // console.log('Get land start:',this.apiUrl);
    return this.http.get<Land[]>(this.apiUrl);
  }

  getLandByDept(department: string): Observable<Land[]> {
    const url = `${this.apiUrl}/?department=${department}`;
    return this.http.get<Land[]>(url);
  }

}
