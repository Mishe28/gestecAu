import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserHttpService {

    API_URL: string;

    constructor(private httpClient: HttpClient) {
      this.API_URL = environment.HOST;
    }
  
    findAll() {
      const url = `${this.API_URL}/users`
      return this.httpClient.get(url);
    }
  
    findOne(id: number) {
      const url = `${this.API_URL}/users/${id}`
      return this.httpClient.get(url);
    }
  
    create(payload: any) {
      const url = `${this.API_URL}/users`
      return this.httpClient.post(url, payload);
    }
  
    update(id: number, payload: any) {
      const url = `${this.API_URL}/users/${id}`
      return this.httpClient.put(url, payload);
    }
  
    delete(id: number) {
      const url = `${this.API_URL}/users/${id}`
      return this.httpClient.delete(url);
    }
}
