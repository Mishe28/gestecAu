import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseModel } from '../models/response.model';
import { TeacherModel } from '../models/teacher.model';

@Injectable({
  providedIn: 'root'
})
export class TeacherHttpService {


  HOST = `${environment.HOST}Teachers`;

  constructor(private httpClient: HttpClient) {
  }

  findAll() {
    return this.httpClient.get<ResponseModel>(this.HOST)
  }

  findOne(id: number) {
    return this.httpClient.get<ResponseModel>(`${this.HOST}/${id}`)
  }

  create(payload: TeacherModel) {
    return this.httpClient.post<ResponseModel>(this.HOST, payload);
  }

  update(id: number, payload: TeacherModel) {
    return this.httpClient.put<ResponseModel>(`${this.HOST}/${id}`, payload);
  }

  delete(id: number) {
    return this.httpClient.delete<ResponseModel>(`${this.HOST}/${id}`);
  }
}
