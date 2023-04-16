import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) { }

  authenticate(username:any,password:any) {
    var userObject={
        "username":username,
        "password":password
    }
    // Make HTTP GET request to API
    console.log("in service");
    
    return this.http.post<any>('http://localhost:8080/authenticate',userObject);
  }

  postData(data: any) {
    // Make HTTP POST request to API
    return this.http.post<any>('https://api.example.com/data', data);
  }
}
