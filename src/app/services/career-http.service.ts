import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/response.model';
import { CareerModel } from '../models/career.model';


@Injectable({
  providedIn: 'root'
})

export class CareerHttpService {
  HOST = `${environment.HOST}Careers`;

  constructor(private httpClient: HttpClient) {
  }

  findAll() {
    return this.httpClient.get<ResponseModel>(this.HOST)
  }

  findOne(id: number) {
    return this.httpClient.get<ResponseModel>(`${this.HOST}/${id}`)
  }

  create(payload: CareerModel) {
    return this.httpClient.post<ResponseModel>(this.HOST, payload);
  }

  update(id: number, payload: CareerModel) {
    return this.httpClient.put<ResponseModel>(`${this.HOST}/${id}`, payload);
  }

  delete(id: number) {
    return this.httpClient.delete<ResponseModel>(`${this.HOST}/${id}`);
  }
}
