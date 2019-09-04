import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { About } from '../models/about.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  private env = environment;

  constructor(private http: HttpClient, private router: Router) { }

  // Get projects

  	getAbout():Observable<About[]> {
  		return this.http.get<About[]>(`${this.env.apiUrl}/about`)
  	}

  	// Get projects by id

  	getAboutById(id):Observable<About[]> {
  		return this.http.get<About[]>(`${this.env.apiUrl}/about/update/${id}`);
  	}

    // Get projects by url

    getAboutByUrl(url):Observable<About[]> {
      return this.http.get<About[]>(`${this.env.apiUrl}/about/${url}`);
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
      return this.http.post(`${this.env.apiUrl}/about/create`, about, options)
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
  		  return this.http.post(`${this.env.apiUrl}/about/update/${id}`, about, options).subscribe(data => {
        this.router.navigate(['/']);
        })
	}

}
