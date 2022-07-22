import { Injectable } from '@angular/core';
import { WorkingHours } from '../models/working-hours';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class WorkingHoursService {
  constructor(private http: HttpClient) {}
  public getWorkingHours() {
    return this.http.get<WorkingHours>(
      'http://cabeer.net/api/Portall/WorkingHours?n=3'
    );
  }
}
