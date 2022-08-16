import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/modules/users.module';
import { LoginServiceService } from 'src/app/services/login-service.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  tmpUser: User = new User(0,'','','','','',false)
  constructor(private router:Router, private loginService: LoginServiceService) { }

  ngOnInit(): void {
  }

  onSubmit(frm: NgForm) {
    if(frm.valid){
      this.loginService.login(this.tmpUser)
    }
  }

}
