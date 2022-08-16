import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminauthService {

  UserLogin: any;

  constructor() { }

  checkLogin() {
    // Lấy userlogin trên localstorage
    let localUser = localStorage.getItem("UserLogin");
    // Kiểm tra userlogin có giá trị kh
    if(localUser && localUser.length > 0)
    {
      this.UserLogin = JSON.parse(localUser);
      if(this.UserLogin.isAdmin) {
        return true;
      }
      return false;
    }
    return false;
  }
}
