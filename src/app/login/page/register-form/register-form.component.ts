import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/modules/users.module';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { LayoutComponent } from '../../layout/layout.component';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  constructor( private loginService : LoginServiceService) { }
  // Biến lưu thông tin user người dùng đăng ký
  newUser:User = new User(0, "", "", "", "", "", false);

  ngOnInit(): void {
  }

  onSubmit(frm: NgForm){
    if(frm.valid) {
      this.loginService.register(this.newUser)
    }
  }

}
