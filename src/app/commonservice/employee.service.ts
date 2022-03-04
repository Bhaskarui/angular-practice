import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
public url ="http://localhost:3000/posts"
  constructor(private http:HttpClient) { }
  
  postEmployee(data:any){
    return this.http.post<any>(this.url, data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getEmployee(){
    return this.http.get<any>(this.url)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  updateEmployee(data:any, id:number){
    return this.http.put<any>(this.url+id, data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteEmployee(id:number){
    return this.http.delete<any>(this.url+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  

}

let headers = new HttpHeaders({
  'Content-Type': 'application/json',
});
let options = { headers: headers };
