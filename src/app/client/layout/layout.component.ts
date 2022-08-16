import { Component, OnInit } from '@angular/core';
import { AdminauthService } from 'src/app/services/adminauth.service';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { HomeComponent } from '../pages/home/home.component';

@Component({
  providers: [HomeComponent],
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(private loginService: LoginServiceService, private adminAuthService: AdminauthService) { }

  isAdmin : boolean = false;
  userLogin: any;

  ngOnInit(): void {
    this.checkLogin();
    this.isAdmin = this.adminAuthService.checkLogin()
  }

  checkLogin(){
    this.userLogin = this.loginService.checkLogin()
  }

  logout() {
    this.loginService.logout()
  }
  

}
