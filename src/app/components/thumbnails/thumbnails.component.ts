import { Component, OnInit } from '@angular/core';
import { Projects } from '../../models/project.model';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-thumbnails',
  templateUrl: './thumbnails.component.html',
  styleUrls: ['./thumbnails.component.scss']
})
export class ThumbnailsComponent implements OnInit {

	projects: Projects[];
	displayedProjects = ['title', 'description', 'content', 'image'];

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
 	this.fetchProjects();
	}
	fetchProjects() {
 	this.projectService.getProjects().subscribe((data: Projects[]) => {
  		this.projects = data;
  		console.log(this.projects);
  	})
  }
}