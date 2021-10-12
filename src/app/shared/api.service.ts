import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {  map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  postEmploye(data: any) {
    return this.http.post<any>("https://localhost:3000/posts", data)
      .pipe(map((res: any) => {
        return res;
      }))
  }
  getEmployee() {
    return this.http.get<any>("https://localhost:3000/posts")
      .pipe(map((res: any) => {
        return res;
      }))
  }
  updateEmployee(data: any,id:number) {
    return this.http.put<any>("https://localhost:3000/posts/"+id,data)
      .pipe(map((res: any) => {
        return res;
      }))
  }
  deleteEmployee(id:number) {
    return this.http.delete<any>("https://localhost:3000/posts"+id)
      .pipe(map((res: any) => {
        return res;
      }))
  }
}