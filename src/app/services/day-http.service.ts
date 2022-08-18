import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import { ResponseModel } from '../models/response.model';
import { DayModel } from '../models/day.model';

@Injectable({
  providedIn: 'root'
})

export class DayHttpService {
  HOST = `${environment.HOST}Days`;

  constructor(private httpClient: HttpClient) {
  }

  findAll() {
    return this.httpClient.get<ResponseModel>(this.HOST)
  }

  findOne(id: number) {
    return this.httpClient.get<ResponseModel>(`${this.HOST}/${id}`)
  }

  create(payload: DayModel) {
    return this.httpClient.post<ResponseModel>(this.HOST, payload);
  }

  update(id: number, payload: DayModel) {
    return this.httpClient.put<ResponseModel>(`${this.HOST}/${id}`, payload);
  }

  delete(id: number) {
    return this.httpClient.delete<ResponseModel>(`${this.HOST}/${id}`);
  }
}
