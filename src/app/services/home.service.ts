import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Home } from '../models/home.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router'; 

@Injectable({
  providedIn: 'root'
})
export class HomeService {

 uri:string = 'http://localhost:3000/api'; // Api

  constructor(private http: HttpClient, private router: Router) { }

  // Get projects

  	getHome():Observable<Home[]> {
  		return this.http.get<Home[]>(`${this.uri}/home`)
  	}

  	// Get projects by id

  	getHomeById(id):Observable<Home[]> {
  		return this.http.get<Home[]>(`${this.uri}/home/update/${id}`);
  	}

    // Get projects by url

    getHomeByUrl(url):Observable<Home[]> {
      return this.http.get<Home[]>(`${this.uri}/home/${url}`);
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
      return this.http.post(`${this.uri}/home/create`, home, options)
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
  		  return this.http.post(`${this.uri}/home/update/${id}`, home, options).subscribe(data => {
        this.router.navigate(['/']);
        })
	}
}
