import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ProjectService } from '../../services/project.service';
import { ImageUploadService } from '../../services/image-upload.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Projects } from '../../models/project.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['../create/create.component.scss']
})
export class EditComponent implements OnInit {

	@Input() projects: Projects[];

	id: String;
	project: any = {};
  imageName: string;
  imageSrc: string;

  constructor(private fb: FormBuilder, private ps: ProjectService, private route: ActivatedRoute,
    private router: Router, private is: ImageUploadService) {
  	this.createForm();
  }

      onFileChange(event: any): void {
      let file = event.target.files[0];
      if(file) {
        let fileReader = new FileReader();

        fileReader.onloadstart = e => {
          console.log("Loading file");
        };
        fileReader.onload = e => {};
        fileReader.onloadend = e => {
          this.imageSrc = fileReader.result.toString();
          this.imageName = Date.now().toString() + '-' + file.name;
        };

        fileReader.readAsDataURL(file);
      } else {
        console.log("Error file not found");
      }
   
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

     updateForm: FormGroup;
  	editorContent: string = null;
  	titleContent: string = null;
  	urlContent: string = null;
  	imageContent: string = null;
  	descriptionContent: string = null;
    editorStyle = {
      height: '500px'
    }

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
        this.updateForm.get('content').setValue(this.project.content);
        this.updateForm.get('url').setValue(this.project.url);
  	});
 });
  }
  	onSubmit() {
  		this.editorContent = this.updateForm.get('content').value
  		this.titleContent = this.updateForm.get('title').value
  		this.descriptionContent = this.updateForm.get('description').value
  		this.urlContent = this.updateForm.get('url').value

      if(this.updateForm.get('image').value != "") {
        this.imageContent = this.imageName
      } else {
        this.imageContent = this.project.image
      }

      if(this.updateForm.get('image').value != "") {
        var fileData = {ImageName: this.imageName, ImageSrc: this.imageSrc};
          this.is.UploadFile(fileData).subscribe(response => {
      })
      }

    this.ps.updateProject(this.id, this.titleContent, this.descriptionContent, this.imageContent, this.editorContent, this.urlContent)

    }

}
