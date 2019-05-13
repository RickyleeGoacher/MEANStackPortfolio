import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { Socials } from '../../models/social.model';
import { SocialService } from '../../services/social.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
pageTop() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }
	@Input() socials: Socials[];
  


  constructor( private ss: SocialService, private userService:UserService,) { }

  ngOnInit() { this.fetchSocials(); }

	fetchSocials() {
 	this.ss.getSocial().subscribe((data: Socials[]) => {
  		this.socials = data;
  		console.log(this.socials);
  	})
  }

}
