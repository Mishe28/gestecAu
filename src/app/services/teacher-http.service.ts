import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TeacherHttpService {
  

    HOST = `${environment.HOST}/teacher`;

    constructor(private httpClient: HttpClient) {
    }
  
    findAll(): Observable<any> {
      return this.httpClient.get(this.HOST)
    }
  
    findOne(id: number): Observable<any> {
      return this.httpClient.get(`${this.HOST}/${id}`)
    }
  
    create(payload: any): Observable<any> {
      const url = `${this.HOST}`;
      return this.httpClient.post(url, payload);
    }
  
    update(id: number, payload: any): Observable<any> {
      const url = `${this.HOST}/${id}`;
      return this.httpClient.put(url, payload);
    }
  
    delete(id: number): Observable<any> {
      const url = `${this.HOST}/${id}`;
      return this.httpClient.delete(url);
    }
}
