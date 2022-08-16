import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/modules/users.module';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  Users: User[] = [
    new User(0,'admin','admin','Administrator','099999999','admin@admin.com',true)
  ]
  constructor() { }

  ngOnInit(): void {
    //Gọi hàm loadUsersData:
      // - Nếu đã có Users trên localstorage thì lấy dữ liệu lưu vào mảng Users
      // - Nếu chưa có Users trên localstorage thì set Users trên localstorage có giá trị là mảng Users
        // -> lấy dữ liệu lưu vào mảng Users
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

}
