import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

	uri = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  	getProjects() {
  		return this.http.get(`${this.uri}/projects`)
  	}
}
