import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private userService:UserService, private router:Router) { }

  ngOnInit() { }

	logout(){
  		this.userService.logout()
    	.subscribe(
    		data => {
    			console.log(data);
    			this.router.navigate(['/login']);
    		},
    		error => {
    			console.error(error);
    		}
    	)
  	}

}
