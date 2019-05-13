import { Component, OnInit, Input  } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HomeService } from '../../services/home.service';
import { ImageUploadService } from '../../services/image-upload.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Home } from '../../models/home.model';

@Component({
  selector: 'app-home-edit',
  templateUrl: './home-edit.component.html',
  styleUrls: ['../create/create.component.scss']
})
export class HomeEditComponent implements OnInit {

	@Input() home: Home[];

	id: String;
	homes: any = {};
	updateForm: FormGroup;
	imageName: string;
  imageSrc: string;

  constructor(private fb: FormBuilder, private hs: HomeService, private route: ActivatedRoute,
    private router: Router, private is: ImageUploadService) { this.createForm(); }

    toggleHomeSelection($event: any) {

      let form =  document.getElementById('home-form');
      let hideItem = document.getElementById('home-hide');
      let label = document.querySelector('label');
      let icon = document.querySelector('#hide-form i');

      if($event.target.checked) {
        label.textContent = 'Hide form ';
        form.style.display = 'block';
        icon.className = 'fas fa-chevron-up';
      } else {
        label.textContent = 'Show form ';
        form.style.display = 'none';
        icon.className = 'fas fa-chevron-down';  
      }
    }

  	  createForm() {
  	  	this.updateForm = this.fb.group({
      	title: ['', Validators.required ],
      	description: ['', Validators.required ],
      	id: ['', Validators.required ],
      	image: ['', Validators.required ]
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
  
  	titleContent: string = null;
  	idContent: string = null;
  	descriptionContent: string = null;
  	imageContent: string = null;

  	ngOnInit() { this.fetchHome(); }

  	fetchHome() {
  		this.hs.getHome().subscribe((data: Home[]) => {
  		this.homes = data[0];
  		this.updateForm.get('title').setValue(this.homes.title);
        this.updateForm.get('description').setValue(this.homes.description);
        this.updateForm.get('id').setValue(this.homes._id);
  		console.log(this.homes);
  		})
  	}
  	onSubmit() {
  		this.titleContent = this.updateForm.get('title').value
  		this.idContent = this.updateForm.get('id').value
  		this.descriptionContent = this.updateForm.get('description').value

      if(this.updateForm.get('image').value != "") {
  		  this.imageContent = this.imageName
      } else {
        this.imageContent = this.homes.image
      }

  		if(this.idContent != "") {
    		this.hs.updateHome(this.idContent, this.titleContent, this.descriptionContent, this.imageContent)
		  } else {
			  this.hs.addHome(this.titleContent, this.descriptionContent, this.imageContent)
		  }
      if(this.updateForm.get('image').value != "") {
        var fileData = {ImageName: this.imageName, ImageSrc: this.imageSrc};
          this.is.UploadFile(fileData).subscribe(responce => {
          console.log(responce);
      })
    }
	}
}

