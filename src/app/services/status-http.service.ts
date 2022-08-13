import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ResponseModel } from '../models/response.model';

@Injectable({
  providedIn: 'root'
})

export class StatusHttpService {
  HOST = `${environment.HOST}Status`;

  constructor(private httpClient: HttpClient) {
  }

  findAll() {
    return this.httpClient.get<ResponseModel>(this.HOST);
  }

  // findOne(id: number) {
  //   return this.httpClient.get(url);
  // }

  // create(payload: any) {
  //   return this.httpClient.post(url, payload);
  // }

  // update(id: number, payload: any) {
  //   return this.httpClient.put(url, payload);
  // }

  // delete(id: number) {
  //   return this.httpClient.delete(url);
  // }
}
