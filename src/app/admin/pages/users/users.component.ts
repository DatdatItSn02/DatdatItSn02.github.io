import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/modules/users.module';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor() { }
  User: User = new User(0,'','','','','',false)
  Users: User[] = [
    new User(0,'admin','admin','Administrator','099999999','admin@admin.com',true)
  ]
  currentIndex: number = 0
  isAdmin:string = 'false'
  // Pipe: orderBy input params
  orderByType:string = "id";
  orderByReverse:boolean = true;
  ngOnInit(): void {
    this.loadUsersData()
  }

  loadUsersData() {
    let jsonUsers = JSON.stringify(this.Users);
    // Kiểm tra localstorage có chứa danh sách chưa
    if(localStorage.getItem('Users') == null) {
      // Thêm mảng user vào localstorage cho lần chạy đầu tiên
      localStorage.setItem('Users',jsonUsers)
      // Lấy user từ localstorage
      let localUsers:string|null = localStorage.getItem('Users');
      if(typeof(localUsers) === 'string'){
        this.Users = JSON.parse(localUsers)
      }
    }
    else {
      // Lấy user từ localstorage
      let localUsers:string|null = localStorage.getItem('Users');
      if(typeof(localUsers) === 'string'){
        this.Users = JSON.parse(localUsers)
      }
  }     
  }

  // Phương thức xóa user 
  userDelete(index:number) {
    let tmpJsonUserLogin = localStorage.getItem('UserLogin')
    // Biến lưu tài khoản đang đăng nhập
    let tmpUserLogin: any;
    if(tmpJsonUserLogin != null){
      tmpUserLogin = JSON.parse(tmpJsonUserLogin)
    }
    // Kiểm tra tài khoản cần xóa có phải tài khoản đang đăng nhập không
    if(tmpUserLogin.id != this.Users[index].id ){
      this.Users.splice(index,1);
      localStorage.setItem('Users',JSON.stringify(this.Users))
    }
    else{
      alert('Bạn không thể xóa tài khoản đang đăng nhập')
    }
  }

  // Phương thức thêm user
  addUserSubmit(frm:NgForm) {
    if(frm.valid){
      if(this.isAdmin == 'true'){
        this.User.isAdmin = true;
      }
      else{
        this.User.isAdmin = false
      }
      let newUserId = this.Users.slice(-1)[0].id + 1;
      this.User.id = newUserId;
      this.Users.push(this.User);
      localStorage.setItem('Users',JSON.stringify(this.Users))
      this.loadUsersData()
      this.User = new User(0,'','','','','',false)
    }
  }

  // Phương thức update modal update user
  userUpdate(item: any, index: number) {
    this.User = item
    this.currentIndex = index
  }
  // Phương thức update user
  updateUserSubmit(frm:NgForm) {
    if(this.isAdmin == 'true'){
      this.User.isAdmin = true;
    }
    else{
      this.User.isAdmin = false
    }
    this.Users[this.currentIndex] = this.User
    localStorage.setItem('Users',JSON.stringify(this.Users))
    this.loadUsersData()
    this.User = new User(0,'','','','','',false)
  }

  // Phương thức thay đổi input của pipe orderBy 
  orderByChange(type:string){
    this.orderByType = type;
    this.orderByReverse = !this.orderByReverse
  }
}
