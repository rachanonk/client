import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Username } from './username';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
 
@Injectable({providedIn:'root'})
export class ApiService {
 
  baseURL: string = "http://localhost:3000/";
 
  constructor(private http: HttpClient) {
  }
 
  getUsers(): Observable<Username[]> {
    console.log('getUsers '+this.baseURL + 'usernames')
    return this.http.get<Username[]>(this.baseURL + 'usernames')
  }
 
  Login(username:Username): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(username);
    console.log(body)
    return this.http.post(this.baseURL + 'usernames', body,{'headers':headers})
  }
}