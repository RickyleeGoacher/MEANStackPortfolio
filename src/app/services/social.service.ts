import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Socials } from '../models/social.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router'; 

@Injectable({
  providedIn: 'root'
})
export class SocialService {

uri:string = 'http://localhost:3000'; // Api

  constructor(private http: HttpClient, private router: Router) { }

  // Get projects

  	getSocial():Observable<Socials[]> {
  		return this.http.get<Socials[]>(`${this.uri}/social`)
  	}

  	// Get projects by id

  	getSocialById(id):Observable<Socials[]> {
  		return this.http.get<Socials[]>(`${this.uri}/social/update/${id}`);
  	}

    // Get projects by url

    getSocialByUrl(url):Observable<Socials[]> {
      return this.http.get<Socials[]>(`${this.uri}/social/${url}`);
    }

  // Add project to database

    addSocial(icon, link) {
      let headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });
      let options = {
        headers: headers
       }
      const social = {
  		icon: icon,
  		link: link
      };
      return this.http.post(`${this.uri}/social/create`, social, options)
      .subscribe(data => {
        console.log(data);
        this.router.navigate(['/']);
      });
    }

    // Update projects

  	updateSocial(id, icon, link) {
        let headers = new HttpHeaders({
          'Content-Type': 'application/json'
        });
        let options = {
          headers: headers
        }
  		  const social = {
  			  icon: icon,
  			  link: link
  		  };
  		  return this.http.post(`${this.uri}/social/update/${id}`, social, options).subscribe(data => {
        this.router.navigate(['/']);
        })
	}
}
