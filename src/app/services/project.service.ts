import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Projects } from '../models/project.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router'; 

@Injectable({
  providedIn: 'root'
})

export class ProjectService {

	uri:string = 'http://localhost:3000/api'; // Api

  constructor(private http: HttpClient, private router: Router) { }

  // Get projects

  	getProjects():Observable<Projects[]> {
  		return this.http.get<Projects[]>(`${this.uri}/projects`)
  	}

  // Get projects by id

  	getProjectById(id):Observable<Projects[]> {
  		return this.http.get<Projects[]>(`${this.uri}/projects/update/${id}`);
  	}

    // Get projects by url

    getProjectByUrl(url):Observable<Projects[]> {
      return this.http.get<Projects[]>(`${this.uri}/projects/${url}`);
    }

  // Add project to database

    addProject(title, description, image, content, url) {
      let headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });
      let options = {
        headers: headers
       }
      const project = {
        title: title,
        description: description,
        image: image,
        content: content,
        url: url
      };
      return this.http.post(`${this.uri}/projects/create`, project, options)
      .subscribe(data => {
        console.log(data);
        this.router.navigate(['/']);
      });
    }

    // Update projects

  	updateProject(id, title, description, image, content, url) {
        let headers = new HttpHeaders({
          'Content-Type': 'application/json'
        });
        let options = {
          headers: headers
        }
  		  const project = {
  			  title: title,
  			  description: description,
  			  image: image,
  			  content: content,
          url: url
  		  };
  		  return this.http.post(`${this.uri}/projects/update/${id}`, project, options).subscribe(data => {
        this.router.navigate(['/']);
        });		
  	}

    // Delete project

  	deleteProject(id) {
  		return this.http.get(`${this.uri}/projects/delete/${id}`);
  	}
}
