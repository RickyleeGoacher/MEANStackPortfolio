import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router'; 
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

	private env = environment; 

  constructor(private http: HttpClient, private router: Router) { }

  register(body:any){

  	let headers = new HttpHeaders({
  	  'Content-Type': 'application/json'
  	});

  	let options = {
  		headers: headers
  	}
    return this.http.post<any>(`${this.env.apiUrl}/users/register`,body, options)
  }

  login(body:any){
    return this.http.post<any>(`${this.env.apiUrl}/users/login`,body,{
      observe:'body',
      headers:new HttpHeaders().append('Content-Type','application/json')
    });
  }


  logout(){
    return this.http.get(`${this.env.apiUrl}/users/logout`,{
      observe:'body',
      headers:new HttpHeaders().append('Content-Type','application/json')
    })
  }

  get loggedIn(): boolean {
    return !!sessionStorage.getItem('token');
  }

  getToken(): any {
    return sessionStorage.getItem('token');
  }


}
