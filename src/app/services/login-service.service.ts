import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../modules/users.module';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  listUsers: User[] = []
  userLogin: any
  constructor(private router:Router) { }

  loadUsersData(){
    // Đặt biến localUsers để lưu tạm dữ liệu localstorage
    let localUsers = localStorage.getItem('Users');
    // Kiểm tra localUser có khác null không
    if(localUsers != null){
      // Gán giá trị cho mảng listUsers
      this.listUsers = JSON.parse(localUsers)
    }
  }
  loadUserLogin() {
    // Đặt biến localUsers để lưu tạm dữ liệu localstorage
    let localUserLogin = localStorage.getItem('UserLogin');
    // Kiểm tra localUser có khác null không
    if(localUserLogin != null){
      // Gán giá trị cho mảng listUsers
      this.userLogin = JSON.parse(localUserLogin)
    } 
  }

  checkLogin () {
    this.loadUserLogin()
    if(this.userLogin) {
      return this.userLogin;
    }
    else {
      return ;
    }
  }

  login(user:any) {
    this.loadUsersData()
    // Đặt biến flag kiểm tra kết quả đăng nhập
    let flag = false;
    // Vòng lặp mảng listUsers(Nếu như đúng username password thì đổi flag = true)
    this.listUsers.forEach((item)=>{
      if(item.username == user.username &&
        item.password == user.password ) {
           this.userLogin = item;
          flag = true;
      }
    })
    // Kiểm tra flag (flag = true : Thành công, flag = false : Thất bại)
    if(flag) {
      localStorage.setItem('UserLogin', JSON.stringify(this.userLogin))
      this.router.navigate(['/clients/home'])
    }else {
      alert('Tài khoản hoặc mật khẩu không chính xác')
      this.router.navigate(['/auth/login'])
    }
  }

  logout() {
    localStorage.removeItem('cart')
    localStorage.removeItem('UserLogin')
    this.router.navigate(['/auth/login'])
  }

  register(newUser: User) {
    this.loadUsersData()
    // Tạo id mới cho tài khoản mới đăng ký
    let newUserId = this.listUsers.length;
    // Gán id mới cho tài khoản mới đăng ký
    newUser.id = newUserId;
    // Thêm tài khoản mới đăng ký vào mảng listUsers
    this.listUsers.push(newUser);
    // Cập nhật lại LocalStorage
    localStorage.setItem('Users', JSON.stringify(this.listUsers))

    this.router.navigate(['/auth/login'])
  }
}
