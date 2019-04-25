import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ProjectService } from '../../services/project.service';
import { Projects } from '../../models/project.model';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

	public titleToUrl = "";

  	constructor(private fb: FormBuilder, private ps: ProjectService) {
  		this.editorForm = this.fb.group({
      	title: ['', Validators.required ],
      	description: ['', Validators.required ],
      	content: '',
      	url: ['', Validators.required ],
      	image: ['', Validators.required ]
    	});
  	}


  	editorForm: FormGroup;
  	editorContent: string = null;
  	titleContent: string = null;
  	urlContent: string = null;
  	imageContent: string = null;
  	descriptionContent: string = null;

  	editorStyle = {
  		height: '500px'
  	}

  	ngOnInit() {
  		this.editorForm = new FormGroup({
  			'content': new FormControl(null),
  			'title': new FormControl(null),
  			'url': new FormControl(null),
  			'description': new FormControl(null),
  			'image': new FormControl(null)
  		})
  	}

  	onSubmit() {
  		this.editorContent = this.editorForm.get('content').value,
  		this.titleContent = this.editorForm.get('title').value,
  		this.urlContent = this.editorForm.get('url').value,
  		this.imageContent = this.editorForm.get('image').value,
  		this.descriptionContent = this.editorForm.get('description').value,
  		
  		this.ps.addProject(this.titleContent, this.descriptionContent, this.imageContent, this.editorContent, this.titleToUrl)
  	}

    // Convert title to url

  	onKey(event: any) {
  		this.titleToUrl = event.target.value.replace(/ +/g, '-').toLowerCase();
  	}

}
