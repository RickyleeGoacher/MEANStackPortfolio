import { Component, OnInit, Input } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { Home } from '../../models/home.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


		@Input() home: any = {};

  constructor(private homeService: HomeService) { }

  ngOnInit() {
 	this.fetchHome();
	}

	fetchHome() {
 	this.homeService.getHome().subscribe((data: Home[]) => {
  		this.home = data[0];
  		console.log(this.home);
  	})
  }

}

