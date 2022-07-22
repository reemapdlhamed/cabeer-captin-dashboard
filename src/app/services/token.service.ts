import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Token } from '../models/token';
@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor(public http: HttpClient) {}
  public getToken() {
    return this.http.post<Token>(`http://cabeer.net/api/Account/GetToken`, {
      Phone: 'mansorurr',
      Password: 'Admin@123',
    });
  }
  getAuthToken(): string {
    return localStorage.getItem('Token');
    
  }
}
