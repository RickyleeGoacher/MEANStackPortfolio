import { Component, OnInit, Input } from '@angular/core';
import { AboutService } from '../../services/about.service';
import { About } from '../../models/about.model';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

	@Input() about: About[];

	content: string = null;

  constructor(private aboutService: AboutService) { }

  ngOnInit() { this.fetchAbout(); }

	fetchAbout() {
 	this.aboutService.getAbout().subscribe((data: About[]) => {
  		this.about = data;
  		this.content = data[0].description;
  	})
  }

}
