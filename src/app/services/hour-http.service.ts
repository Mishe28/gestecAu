import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HourModel } from '../models/hour.model';
import { ResponseModel } from '../models/response.model';

@Injectable({
  providedIn: 'root'
})
export class HourHttpService {
    HOST = `${environment.HOST}Careers`;
  
    constructor(private httpClient: HttpClient) {
    }
  
    findAll() {
      return this.httpClient.get<ResponseModel>(this.HOST)
    }
  
    findOne(id: number) {
      return this.httpClient.get<ResponseModel>(`${this.HOST}/${id}`)
    }
  
    create(payload: HourModel) {
      return this.httpClient.post<ResponseModel>(this.HOST, payload);
    }
  
    update(id: number, payload: HourModel) {
      return this.httpClient.put<ResponseModel>(`${this.HOST}/${id}`, payload);
    }
  
    delete(id: number) {
      return this.httpClient.delete<ResponseModel>(`${this.HOST}/${id}`);
    }
}
