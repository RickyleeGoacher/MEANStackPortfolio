import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { About } from '../models/about.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router'; 

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  uri:string = 'http://localhost:3000/api'; // Api

  constructor(private http: HttpClient, private router: Router) { }

  // Get projects

  	getAbout():Observable<About[]> {
  		return this.http.get<About[]>(`${this.uri}/about`)
  	}

  	// Get projects by id

  	getAboutById(id):Observable<About[]> {
  		return this.http.get<About[]>(`${this.uri}/about/update/${id}`);
  	}

    // Get projects by url

    getAboutByUrl(url):Observable<About[]> {
      return this.http.get<About[]>(`${this.uri}/about/${url}`);
    }

  // Add project to database

    addAbout(title, description) {
      let headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });
      let options = {
        headers: headers
       }
      const about = {
        title: title,
        description: description,
      };
      return this.http.post(`${this.uri}/about/create`, about, options)
      .subscribe(data => {
        console.log(data);
        this.router.navigate(['/']);
      });
    }

    // Update projects

  	updateAbout(id, title, description) {
        let headers = new HttpHeaders({
          'Content-Type': 'application/json'
        });
        let options = {
          headers: headers
        }
  		  const about = {
  			  title: title,
  			  description: description
  		  };
  		  return this.http.post(`${this.uri}/about/update/${id}`, about, options).subscribe(data => {
        this.router.navigate(['/']);
        })
	}

}
