import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Home } from '../models/home.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

 private env = environment;

  constructor(private http: HttpClient, private router: Router) { }

  // Get projects

  	getHome():Observable<Home[]> {
  		return this.http.get<Home[]>(`${this.env.apiUrl}/home`)
  	}

  	// Get projects by id

  	getHomeById(id):Observable<Home[]> {
  		return this.http.get<Home[]>(`${this.env.apiUrl}/home/update/${id}`);
  	}

    // Get projects by url

    getHomeByUrl(url):Observable<Home[]> {
      return this.http.get<Home[]>(`${this.env.apiUrl}/home/${url}`);
    }

  // Add project to database

    addHome(title, description, image) {
      let headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });
      let options = {
        headers: headers
       }
      const home = {
        title: title,
        description: description,
        image: image
      };
      return this.http.post(`${this.env.apiUrl}/home/create`, home, options)
      .subscribe(data => {
        console.log(data);
        this.router.navigate(['/']);
      });
    }

    // Update projects

  	updateHome(id, title, description, image) {
        let headers = new HttpHeaders({
          'Content-Type': 'application/json'
        });
        let options = {
          headers: headers
        }
  		  const home = {
  			  title: title,
  			  description: description,
  			  image: image,
  		  };
  		  return this.http.post(`${this.env.apiUrl}/home/update/${id}`, home, options).subscribe(data => {
        this.router.navigate(['/']);
        })
	}
}
