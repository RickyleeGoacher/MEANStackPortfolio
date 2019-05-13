import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ProjectService } from '../../services/project.service';
import { ImageUploadService } from '../../services/image-upload.service';
import { Projects } from '../../models/project.model';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

	public titleToUrl = "";
  imageName: string;
  imageSrc: string;

  config = {
    clipboard: {
      matchVisual: false
    }
  }

  	constructor(private fb: FormBuilder, private ps: ProjectService, private is: ImageUploadService) {
  		this.editorForm = this.fb.group({
      	title: ['', Validators.required ],
      	description: ['', Validators.required ],
      	content: '',
      	url: ['', Validators.required ],
      	image: ['', Validators.required]
    	});
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
  		this.imageContent = this.imageName,
  		this.descriptionContent = this.editorForm.get('description').value,
  		this.ps.addProject(this.titleContent, this.descriptionContent, this.imageContent, this.editorContent, this.titleToUrl),
      console.log(this.imageContent)
            let fileData = {ImageName: this.imageName, ImageSrc: this.imageSrc};
           this.is.UploadFile(fileData).subscribe(responce => {
        console.log(responce);
      })
    }

    // Convert title to url

  	onKey(event: any) {
  		this.titleToUrl = event.target.value.replace(/ +/g, '-').toLowerCase();
  	}

}
