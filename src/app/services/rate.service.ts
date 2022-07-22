import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Rate } from '../models/rate';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class RateService {
  constructor(private http: HttpClient) {}
  public getRate() {
    return this.http.get<Rate>(`${environment.apiUrl}Portall/Rate`);
  }
}
