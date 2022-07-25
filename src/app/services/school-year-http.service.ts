import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class SchoolYearHttpService {
    API_URL: string;

    constructor(private httpClient: HttpClient) {
      this.API_URL = environment.HOST;
    }
  
    findAll() {
      const url = `${this.API_URL}/school-year`
      return this.httpClient.get(url);
    }
  
    findOne(id: number) {
      const url = `${this.API_URL}/school-year/${id}`
      return this.httpClient.get(url);
    }
  
    create(payload: any) {
      const url = `${this.API_URL}/school-year`
      return this.httpClient.post(url, payload);
    }
  
    update(id: number, payload: any) {
      const url = `${this.API_URL}/school-year/${id}`
      return this.httpClient.put(url, payload);
    }
  
    delete(id: number) {
      const url = `${this.API_URL}/school-year/${id}`
      return this.httpClient.delete(url);
    }
}
