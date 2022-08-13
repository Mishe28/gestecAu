import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/response.model';
import { ClassroomModel } from '../models/classroom.model';

@Injectable({
  providedIn: 'root'
})

export class ClassroomHttpService {
  HOST = `${environment.HOST}Classrooms`;

  constructor(private httpClient: HttpClient) {
  }

  findAll() {
    return this.httpClient.get<ResponseModel>(this.HOST)
  }

  findOne(id: number) {
    return this.httpClient.get<ResponseModel>(`${this.HOST}/${id}`)
  }

  create(payload: ClassroomModel) {
    return this.httpClient.post<ResponseModel>(this.HOST, payload);
  }

  update(id: number, payload: ClassroomModel) {
    return this.httpClient.put<ResponseModel>(`${this.HOST}/${id}`, payload);
  }

  delete(id: number) {
    return this.httpClient.delete<ResponseModel>(`${this.HOST}/${id}`);
  }
}
