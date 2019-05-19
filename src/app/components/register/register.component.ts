import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../login/login.component.scss']
})
export class RegisterComponent implements OnInit {

	registerForm:FormGroup = new FormGroup({
    	email:new FormControl(null,[Validators.email,Validators.required]),
    	password:new FormControl(null,Validators.required),
    	password2:new FormControl(null,Validators.required),
      adminSecret:new FormControl(null,Validators.required)
  	})

  constructor(private router: Router, private userService: UserService) { }

  public errorMessage: string = '';

  ngOnInit() {
  }

  moveToLogin() {
  	this.router.navigate(['/']);
  }

  onSubmit(){
    if(!this.registerForm.valid){
      console.log('Invalid Form'); return;
    }

    this.userService.register(JSON.stringify(this.registerForm.value))
        .subscribe(
      res => {
        console.log(res);
        if(!res.errors) {
        this.router.navigate(['login']);
        } else {
          this.errorMessage = res.errors[0].msg;
        }
      },
      error=>console.error(error)
    )
    
    // console.log(JSON.stringify(this.registerForm.value));
  }

}
