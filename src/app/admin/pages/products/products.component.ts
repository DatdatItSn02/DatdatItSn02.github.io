import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from 'src/app/modules/products.module';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.loadProducts()
  }
  // Mảng sản phẩm kiểu json (cho lần load đầu tiên)
  jsonProduct = '[{"id":0,"name":"Lều Cắm Trại 4 Người NatureHike","price":90000,"timeRent":{"timeTo":"","timeFrom":""},"description":"Kích thước: 215 x 215 x 120cm","image":"product1.png","category":"Lều 4 người"},{"id":1,"name":" Lều Cắm Trại 2 Người Salida","price":40000,"timeRent":{"timeTo":"","timeFrom":""},"description":"Kích Thước: Dài 2.0m, Rộng 1.4 m, Cao 1.3m.","image":"product2.png","category":"Lều 2 người"},{"id":2,"name":"Lều 2 Người Vintage Mẫu 2022","price":100000,"timeRent":{"timeTo":"","timeFrom":""},"description":"2m10 x 1m60 x cao 140 .","image":"product3.png","category":"Lều 2 người"},{"id":3,"name":"Lều 2 Người Cao Cấp","price":80000,"timeRent":{"timeTo":"","timeFrom":""},"description":"Kích Thước: Dài 2.0m, Rộng 1.4 m, Cao 1.3m.","image":"product4.png","category":"Lều 2 người"},{"id":4,"name":"Lều 4 Người Vintage Mẫu 2022","price":150000,"timeRent":{"timeTo":"","timeFrom":""},"description":"2m10 x 2m40 x cao 140 .","image":"product5.png","category":"Lều 4 người"},{"id":5,"name":"Lều Cắm Trại 4 Người Eureka","price":60000,"timeRent":{"timeTo":"","timeFrom":""},"description":"Kích Thước : Dài 2.20m , Rộng 2.20m . Cao 1.40m.","image":"product6.png","category":"Lều 4 người"},{"id":6,"name":"Lều 4 Người Cao Cấp","price":120000,"timeRent":{"timeTo":"","timeFrom":""},"description":"Kích Thước : Dài 2.20m , Rộng 2.20m . Cao 1.40m.","image":"product7.png","category":"Lều 4 người"},{"id":7,"name":"Lều 4 Người NatureHike Cao Cấp","price":120000,"timeRent":{"timeTo":"","timeFrom":""},"description":"Kích thước: 215 x 215 x 120cm","image":"product8.png","category":"Lều 2 người"},{"id":8,"name":"Lều Mông Cổ Trắng Mẫu 2022","price":250000,"timeRent":{"timeTo":"","timeFrom":""},"description":"Kích Thước: Dài 3.2 m, Rộng 3.2 m, Cao 2.0 m.","image":"product9.png","category":"Lều 6 người"},{"id":9,"name":"Lều 6 Người Vintage Mẫu 2022","price":200000,"timeRent":{"timeTo":"","timeFrom":""},"description":"2m10 x 3m60 x cao 1m80 .","image":"product10.png","category":"Lều 6 người"},{"id":10,"name":"Lều Cắm Trại 12 Người Outwell","price":150000,"timeRent":{"timeTo":"","timeFrom":""},"description":"Kích Thước :Dài 3,5m. Rộng 3,5m . Cao 2m.","image":"product11.png","category":"Lều 12 người"},{"id":11,"name":"Lều Chữ A 15 người","price":80000,"timeRent":{"timeTo":"","timeFrom":""},"description":"Kích Thước :Dài 4,5m. Rộng 3m . Cao 2m.","image":"product12.png","category":"Lều 12 người"},{"id":12,"name":"Lều 10 Người Cao Cấp","price":240000,"timeRent":{"timeTo":"","timeFrom":""},"description":"Kích Thước :Dài 3,5m. Rộng 3,5m . Cao 2m.","image":"product13.png","category":"Lều 12 người"},{"id":13,"name":"Combo Lều 2 Người Cao Cấp","price":120000,"timeRent":{"timeTo":"","timeFrom":""},"description":"Size: 140x200cm","image":"product14.png","category":"Combo 2 người"},{"id":14,"name":"Combo Lều 4 Người NatureHike Cao Cấp","price":170000,"timeRent":{"timeTo":"","timeFrom":""},"description":"Size: 2m1 x 2m1","image":"product15.png","category":"Combo 4 người"},{"id":15,"name":"Combo Lều 6 Người Cao Cấp","price":180000,"timeRent":{"timeTo":"","timeFrom":""},"description":"Size: 2m4 x 2m6","image":"product16.png","category":"Combo 6 người"},{"id":16,"name":"Combo Lều 10 Người Cao Cấp","price":360000,"timeRent":{"timeTo":"","timeFrom":""},"description":"Size: 3m5 x 3m5","image":"product17.png","category":"Combo 12 người"}]'
  // Mảng sản phẩm
  currentIndex: number = 0;
  // Mảng sản phẩm
  products : Product[] = [];
  // Sản phẩm tạm 
  product: Product = new Product(0,'',0,'','','','','');
  // Pipe: orderBy input params
  orderByType:string = "id";
  orderByReverse:boolean = true;

  // Phương thức load sản phẩm từ localstorage
  loadProducts () {
    // Kiểm tra localstorage có chứa sản phẩm chưa
    if(localStorage.getItem('product') == null) {
      // Thêm mảng sản phẩm vào localstorage cho lần chạy đầu tiên
      localStorage.setItem('product',this.jsonProduct)
      // Lấy sản phẩm từ localstorage
      let localProduct:string|null = localStorage.getItem('product');
      if(typeof(localProduct) === 'string'){
        this.products = JSON.parse(localProduct)
      }
    }
    else {
      // Lấy sản phẩm từ localstorage
      let localProduct:string|null = localStorage.getItem('product');
      if(typeof(localProduct) === 'string'){
        this.products = JSON.parse(localProduct)
      }
    }
  }

  // Phương thức xóa sản phẩm
  itemDelete(index:any) {
    this.products.splice(index,1);
    localStorage.setItem('product',JSON.stringify(this.products))
  }

  // Phương thức update modal update sản phẩm
  itemUpdate(item:any,index:any) {
    this.product = item;
    this.currentIndex = index;
  }

  // Phương thức update sản phẩm 
  itemUpdateSubmit(frm:NgForm){
    this.products[this.currentIndex] = this.product
    localStorage.setItem('product',JSON.stringify(this.products))
    this.loadProducts()
    this.product = new Product(0,'',0,'','','','','');
  }

  // Phương thức thêm sản phẩm
  onSubmit(frm:NgForm){
    if(frm.valid){
      let newProductId = this.products.slice(-1)[0].id + 1;
      this.product.id = newProductId
      this.products.push(this.product);
      localStorage.setItem('product',JSON.stringify(this.products))
      this.loadProducts()
      this.product = new Product(0,'',0,'','','','','');
    }
  }

  // Phương thức thay đổi input của pipe orderBy 
  orderByChange(type:string){
    this.orderByType = type;
    this.orderByReverse = !this.orderByReverse
  }
  
}
