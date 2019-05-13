import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	loginForm : FormGroup=new FormGroup({
    email:new FormControl(null,[Validators.email,Validators.required]),
    password:new FormControl(null, Validators.required)
  });

  constructor(private router:Router, private user:UserService) { }

  public errorMessage: string = '';

  ngOnInit() {
  }

    moveToRegister(){
    this.router.navigate(['/register']);
  }

  onSubmit(){
    if(!this.loginForm.valid){
      console.log('Invalid');return;
    }

    // console.log(JSON.stringify(this.loginForm.value));
    this.user.login(JSON.stringify(this.loginForm.value))
    .subscribe(
      res => {
        console.log(res);
        if(res.user) {
        localStorage.setItem('token', res.token)
        this.router.navigate(['/'])
        } else {
          this.errorMessage = res.message;
        }
      },
      error=>console.error(error)
    )

}
}