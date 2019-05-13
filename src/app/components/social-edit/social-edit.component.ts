import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { SocialService } from '../../services/social.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Socials } from '../../models/social.model';

@Component({
  selector: 'app-social-edit',
  templateUrl: './social-edit.component.html',
  styleUrls: ['./social-edit.component.scss']
})
export class SocialEditComponent implements OnInit {

@Input() socials: Socials[];
	
	social: any = {};
	id: String;
	updateForm: FormGroup;

  constructor(private fb: FormBuilder, private ss: SocialService, private route: ActivatedRoute,
    private router: Router) {
  	this.createForm();
  }

 createForm() {
  	  	this.updateForm = this.fb.group({
      	icon: ['', Validators.required ],
      	link: ['', Validators.required ],
      	id: ['', Validators.required ]
    	});
  }

  	iconContent: string = null;
  	linkContent: string = null;
  	idContent: string = null;

  ngOnInit() { this.fetchSocial(); }

   fetchSocial() {
  	this.route.params.subscribe(params => {
  	this.id = params.id;
 	this.ss.getSocialById(this.id).subscribe(res => {
  		this.social = res;
  			this.updateForm.get('icon').setValue(this.social.icon);
  			this.updateForm.get('link').setValue(this.social.link);
  			this.updateForm.get('id').setValue(this.social._id);
  		console.log(this.social);
  	});
 });
  }
  	onSubmit() {
  		this.iconContent = this.updateForm.get('icon').value
  		this.linkContent = this.updateForm.get('link').value
  		this.idContent = this.updateForm.get('id').value


    this.ss.updateSocial(this.idContent, this.iconContent, this.linkContent)

    }


}
