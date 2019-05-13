import { Component, OnInit, Input } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

	@Input() project: any = {};
	@Input() home: any = {};

  constructor(private projectService: ProjectService, private homeService: HomeService) { }

  ngOnInit() {
  }

}
