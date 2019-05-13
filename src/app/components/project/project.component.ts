import { Component, OnInit, Input } from '@angular/core';
import { Projects } from '../../models/project.model';
import { ProjectService } from '../../services/project.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
	
	@Input() projects: Projects[];

	url: String;
	project: any = {};
	content: string = null;

  constructor(private ps: ProjectService, private route: ActivatedRoute,
    private router: Router) { }

    ngOnInit() { this.fetchProject(); }

    fetchProject() {
 	    this.route.params.subscribe(params => {
  	    this.url = params.url;
 	      this.ps.getProjectByUrl(this.url).subscribe(res => {
  		    this.project = res;
  		    this.content = this.project.content;
  		    console.log(this.project);
  	    });
      });
    }

}
