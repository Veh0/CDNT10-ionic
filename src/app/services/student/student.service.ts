import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Student {
  id:number;
  name:string;
  average:number;
  alternant?:boolean
}

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  BASE_URL = 'http://localhost:3000/students';

  constructor(private http:HttpClient) { }

  findAll(): Observable<Student[]> {
    return this.http.get<Student[]>(this.BASE_URL);
  }

  findById(id:number): Observable<Student> {
    return this.http.get<Student>(this.BASE_URL+'/'+id);
  }
}
