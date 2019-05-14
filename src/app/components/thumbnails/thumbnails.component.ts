import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Projects } from '../../models/project.model';
import { ProjectService } from '../../services/project.service';
import { UserService } from '../../services/user.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-thumbnails',
  templateUrl: './thumbnails.component.html',
  styleUrls: ['./thumbnails.component.scss']
})
export class ThumbnailsComponent implements OnInit {

	@Input() projects: Projects[];
  


  constructor(private projectService: ProjectService, private userService:UserService,) { }

  ngOnInit() {
 	this.fetchProjects();
	}

	fetchProjects() {
 	this.projectService.getProjects().subscribe((data: Projects[]) => {
  		this.projects = data;
  	})
  }

  deleteProject(id) {
    this.projectService.deleteProject(id).subscribe(res => {
      console.log('Deleted');
      this.fetchProjects();
    })
  }

}