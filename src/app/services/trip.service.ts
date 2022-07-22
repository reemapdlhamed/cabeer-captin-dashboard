import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class TripService {
  constructor(private http: HttpClient) {}
  public getTripById(id:number) {
   return  this.http.get<any>(`${environment.apiUrl}Portall/AnyTrip?id=${id}`);
  }
}
