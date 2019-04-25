import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ProjectService } from '../../services/project.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Projects } from '../../models/project.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

	@Input() projects: Projects[];

	id: String;
	project: any = {};
	updateForm: FormGroup;

  constructor(private fb: FormBuilder, private ps: ProjectService, private route: ActivatedRoute,
    private router: Router) {
  	this.createForm();
  }

 createForm() {
  	  	this.updateForm = this.fb.group({
      	title: ['', Validators.required ],
      	description: ['', Validators.required ],
      	content: '',
      	url: ['', Validators.required ],
      	image: ['', Validators.required ]
    	});
  }

   
  	editorContent: string = null;
  	titleContent: string = null;
  	urlContent: string = null;
  	imageContent: string = null;
  	descriptionContent: string = null;

  ngOnInit() {

this.fetchProject();
  }

  fetchProject() {
  	this.route.params.subscribe(params => {
  	this.id = params.id;
 	this.ps.getProjectById(this.id).subscribe(res => {
  		this.project = res;
  		this.updateForm.get('title').setValue(this.project.title);
        this.updateForm.get('description').setValue(this.project.description);
        this.updateForm.get('image').setValue(this.project.image);
        this.updateForm.get('content').setValue(this.project.content);
        this.updateForm.get('url').setValue(this.project.url);
  		console.log(this.project);
  	});
 });
  }
  	onSubmit() {
  		this.editorContent = this.updateForm.get('content').value
  		this.titleContent = this.updateForm.get('title').value
  		this.imageContent = this.updateForm.get('image').value
  		this.descriptionContent = this.updateForm.get('description').value
  		this.urlContent = this.updateForm.get('url').value

    this.ps.updateProject(this.id, this.titleContent, this.descriptionContent, this.imageContent, this.editorContent, this.urlContent)

}

}
