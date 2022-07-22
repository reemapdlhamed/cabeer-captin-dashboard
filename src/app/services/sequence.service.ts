import { Injectable } from '@angular/core';
import { Sequence } from '../models/sequence';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class SequenceService {
  constructor(private http: HttpClient) {}
  public getSequence() {
    return this.http.get(`${environment.apiUrl}Portall/Sequence?n=2`);
  }
}
