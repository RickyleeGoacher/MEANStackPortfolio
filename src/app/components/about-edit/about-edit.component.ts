import { Component, OnInit, Input  } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AboutService } from '../../services/about.service';
import { ActivatedRoute, Router } from '@angular/router';
import { About } from '../../models/about.model';

@Component({
  selector: 'app-about-edit',
  templateUrl: './about-edit.component.html',
  styleUrls: ['../create/create.component.scss']
})
export class AboutEditComponent implements OnInit {

	@Input() about: About[];

	id: String;
	abouts: any = {};
	updateForm: FormGroup;

  constructor(private fb: FormBuilder, private as: AboutService, private route: ActivatedRoute,
    private router: Router) {
  	this.createForm();
  	}

    toggleAboutSelection($event: any) {

      let form =  document.getElementById('about-form')
      let hideItem = document.getElementById('hide');
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
      	id: ['', Validators.required ]
    	});
  	}

   
  	titleContent: string = null;
  	idContent: string = null;
  	descriptionContent: string = null;

  ngOnInit() { this.fetchAbout(); }

  fetchAbout() {
  	this.as.getAbout().subscribe((data: About[]) => {
  		this.abouts = data[0];
  		this.updateForm.get('title').setValue(this.abouts.title);
        this.updateForm.get('description').setValue(this.abouts.description);
        this.updateForm.get('id').setValue(this.abouts._id);
  	})
  }
  	onSubmit() {
  		this.titleContent = this.updateForm.get('title').value
  		this.idContent = this.updateForm.get('id').value
  		this.descriptionContent = this.updateForm.get('description').value

  		if(this.idContent != "") {
    		this.as.updateAbout(this.idContent, this.titleContent, this.descriptionContent)
		} else {
			this.as.addAbout(this.titleContent, this.descriptionContent)
		}
	}

}


