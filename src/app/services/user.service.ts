import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router'; 

@Injectable({
  providedIn: 'root'
})
export class UserService {

	uri:string = 'http://localhost:3000'; 

  constructor(private http: HttpClient, private router: Router) { }

  register(body:any){

  	let headers = new HttpHeaders({
  	  'Content-Type': 'application/json'
  	});

  	let options = {
  		headers: headers
  	}
    return this.http.post<any>(`${this.uri}/users/register`,body, options)
  }

  login(body:any){
    return this.http.post<any>(`${this.uri}/users/login`,body,{
      observe:'body',
      headers:new HttpHeaders().append('Content-Type','application/json')
    });
  }


  logout(){
    return this.http.get(`${this.uri}/users/logout`,{
      observe:'body',
      headers:new HttpHeaders().append('Content-Type','application/json')
    })
  }

  get loggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  getToken(): any {
    return localStorage.getItem('token');
  }


}
