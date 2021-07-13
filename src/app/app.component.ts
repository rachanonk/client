import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

interface IAuthenticationFrom {
  email: string
  password: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  public email = ''
  public password = ''
  title = 'jwt authentication';

  baseURL: string = "http://localhost:5000/";
 
  constructor(private http: HttpClient) {
  }

  Login(): Observable<any> {
    console.log('form submit')
    var username = {
      email: this.email,
      password: this.password,
    }
    console.log(username)
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(username);
    console.log(body)
    return this.http.post(this.baseURL + 'login', body,{'headers':headers})
  }
}