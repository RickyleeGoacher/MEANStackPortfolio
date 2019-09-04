import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Socials } from '../models/social.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SocialService {

private env = environment;

  constructor(private http: HttpClient, private router: Router) { }

  // Get projects

  	getSocial():Observable<Socials[]> {
  		return this.http.get<Socials[]>(`${this.env.apiUrl}/social`)
  	}

  	// Get projects by id

  	getSocialById(id):Observable<Socials[]> {
  		return this.http.get<Socials[]>(`${this.env.apiUrl}/social/update/${id}`);
  	}

    // Get projects by url

    getSocialByUrl(url):Observable<Socials[]> {
      return this.http.get<Socials[]>(`${this.env.apiUrl}/social/${url}`);
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
      return this.http.post(`${this.env.apiUrl}/social/create`, social, options)
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
  		  return this.http.post(`${this.env.apiUrl}/social/update/${id}`, social, options).subscribe(data => {
        this.router.navigate(['/']);
        })
	}
}
