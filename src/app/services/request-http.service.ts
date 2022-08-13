import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseModel } from '../models/response.model';

@Injectable({
  providedIn: 'root'
})
export class RequestHttpService {
  HOST = `${environment.HOST}requests`;
  
  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<any> {
    return this.httpClient.get<ResponseModel>(this.HOST)
  }

  findOne(id: number): Observable<any> {
    return this.httpClient.get<ResponseModel>(`${this.HOST}/${id}`)
  }

  create(payload: any): Observable<any> {
    const url = `${this.HOST}`;
    return this.httpClient.post<ResponseModel>(url, payload);
  }

  update(id: number, payload: any): Observable<any> {
    const url = `${this.HOST}/${id}`;
    return this.httpClient.put<ResponseModel>(url, payload);
  }

  delete(id: number): Observable<any> {
    const url = `${this.HOST}/${id}`;
    return this.httpClient.delete<ResponseModel>(url);
  }
}
