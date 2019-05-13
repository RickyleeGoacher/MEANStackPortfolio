import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(private userService:UserService, private router:Router) { }

  ngOnInit() { }

  logout() {
    this.userService.logout()
  	    .subscribe(
  		    data => {
            console.log(data);
            localStorage.removeItem('token');
            this.router.navigate(['/login']);
          },
  		    error => {
            console.error(error);
          }
  		)
  }

}
