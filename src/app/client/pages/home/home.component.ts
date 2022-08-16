import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Invoice } from 'src/app/modules/invoices.module';
import { Product } from 'src/app/modules/products.module';
import { User } from 'src/app/modules/users.module';
import { LoginServiceService } from 'src/app/services/login-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // tmpProducts : Product[] = [
  //   new Product(0,'Lều Cắm Trại 4 Người NatureHike', '90000' ,
  //   '', '', 'Kích thước: 215 x 215 x 120cm', 'product1.png', 'Lều 4 người'),
  //   new Product(1,' Lều Cắm Trại 2 Người Salida', '40000' ,
  //   '', '', 'Kích Thước: Dài 2.0m, Rộng 1.4 m, Cao 1.3m.', 'product2.png', 'Lều 2 người'),
  //   new Product(2,'Lều 2 Người Vintage Mẫu 2022', '100000' ,
  //   '', '', '2m10 x 1m60 x cao 140 .', 'product3.png', 'Lều 2 người'),
  //   new Product(3,'Lều 2 Người Cao Cấp', '80000' ,
  //   '', '', 'Kích Thước: Dài 2.0m, Rộng 1.4 m, Cao 1.3m.', 'product4.png', 'Lều 2 người'),
  //   new Product(4,'Lều 4 Người Vintage Mẫu 2022', '150000' ,
  //   '', '', '2m10 x 2m40 x cao 140 .', 'product5.png', 'Lều 4 người'),
  //   new Product(5,'Lều Cắm Trại 4 Người Eureka', '60000' ,
  //   '', '', 'Kích Thước : Dài 2.20m , Rộng 2.20m . Cao 1.40m.', 'product6.png', 'Lều 4 người'),
  //   new Product(6,'Lều 4 Người Cao Cấp', '120000' ,
  //   '', '', 'Kích Thước : Dài 2.20m , Rộng 2.20m . Cao 1.40m.', 'product7.png', 'Lều 4 người'),
  //   new Product(7,'Lều 4 Người NatureHike Cao Cấp', '120000' ,
  //   '', '', 'Kích thước: 215 x 215 x 120cm', 'product8.png', 'Lều 2 người'),
  //   new Product(8,'Lều Mông Cổ Trắng Mẫu 2022', '250000' ,
  //   '', '', 'Kích Thước: Dài 3.2 m, Rộng 3.2 m, Cao 2.0 m.', 'product9.png', 'Lều 6 người'),
  //   new Product(9,'Lều 6 Người Vintage Mẫu 2022', '200000' ,
  //   '', '', '2m10 x 3m60 x cao 1m80 .', 'product10.png', 'Lều 6 người'),
  //   new Product(10,'Lều Cắm Trại 12 Người Outwell', '150000' ,
  //   '', '', 'Kích Thước :Dài 3,5m. Rộng 3,5m . Cao 2m.', 'product11.png', 'Lều 12 người'),
  //   new Product(11,'Lều Chữ A 15 người', '80000' ,
  //   '', '', 'Kích Thước :Dài 4,5m. Rộng 3m . Cao 2m.', 'product12.png', 'Lều 12 người'),
  //   new Product(12,'Lều 10 Người Cao Cấp', '240000' ,
  //   '', '', 'Kích Thước :Dài 3,5m. Rộng 3,5m . Cao 2m.', 'product13.png', 'Lều 12 người'),
  //   new Product(13,'Combo Lều 2 Người Cao Cấp', '120000' ,
  //   '', '', 'Size: 140x200cm', 'product14.png', 'Combo 2 người'),
  //   new Product(14,'Combo Lều 4 Người NatureHike Cao Cấp', '170000' ,
  //   '', '', 'Size: 2m1 x 2m1', 'product15.png', 'Combo 4 người'),
  //   new Product(15,'Combo Lều 6 Người Cao Cấp', '180000' ,
  //   '', '', 'Size: 2m4 x 2m6', 'product16.png', 'Combo 6 người'),
  //   new Product(16,'Combo Lều 10 Người Cao Cấp', '360000' ,
  //   '', '', 'Size: 3m5 x 3m5', 'product17.png', 'Combo 10 người'),
  // ];
  
  constructor(private loginService : LoginServiceService) { }

  ngOnInit(): void {
    this.loadProducts()
    this.loadCart()
    this.loadInvoices()
    this.totalCart()
    this.loadUserLogin()
    this.loadUserInvoices()
  }

  searchInput: string = '';
  // Mảng sản phẩm kiểu json (cho lần load đầu tiên)
  jsonProduct = '[{"id":0,"name":"Lều Cắm Trại 4 Người NatureHike","price":90000,"timeRent":{"timeTo":"","timeFrom":""},"description":"Kích thước: 215 x 215 x 120cm","image":"product1.png","category":"Lều 4 người"},{"id":1,"name":" Lều Cắm Trại 2 Người Salida","price":40000,"timeRent":{"timeTo":"","timeFrom":""},"description":"Kích Thước: Dài 2.0m, Rộng 1.4 m, Cao 1.3m.","image":"product2.png","category":"Lều 2 người"},{"id":2,"name":"Lều 2 Người Vintage Mẫu 2022","price":100000,"timeRent":{"timeTo":"","timeFrom":""},"description":"2m10 x 1m60 x cao 140 .","image":"product3.png","category":"Lều 2 người"},{"id":3,"name":"Lều 2 Người Cao Cấp","price":80000,"timeRent":{"timeTo":"","timeFrom":""},"description":"Kích Thước: Dài 2.0m, Rộng 1.4 m, Cao 1.3m.","image":"product4.png","category":"Lều 2 người"},{"id":4,"name":"Lều 4 Người Vintage Mẫu 2022","price":150000,"timeRent":{"timeTo":"","timeFrom":""},"description":"2m10 x 2m40 x cao 140 .","image":"product5.png","category":"Lều 4 người"},{"id":5,"name":"Lều Cắm Trại 4 Người Eureka","price":60000,"timeRent":{"timeTo":"","timeFrom":""},"description":"Kích Thước : Dài 2.20m , Rộng 2.20m . Cao 1.40m.","image":"product6.png","category":"Lều 4 người"},{"id":6,"name":"Lều 4 Người Cao Cấp","price":120000,"timeRent":{"timeTo":"","timeFrom":""},"description":"Kích Thước : Dài 2.20m , Rộng 2.20m . Cao 1.40m.","image":"product7.png","category":"Lều 4 người"},{"id":7,"name":"Lều 4 Người NatureHike Cao Cấp","price":120000,"timeRent":{"timeTo":"","timeFrom":""},"description":"Kích thước: 215 x 215 x 120cm","image":"product8.png","category":"Lều 2 người"},{"id":8,"name":"Lều Mông Cổ Trắng Mẫu 2022","price":250000,"timeRent":{"timeTo":"","timeFrom":""},"description":"Kích Thước: Dài 3.2 m, Rộng 3.2 m, Cao 2.0 m.","image":"product9.png","category":"Lều 6 người"},{"id":9,"name":"Lều 6 Người Vintage Mẫu 2022","price":200000,"timeRent":{"timeTo":"","timeFrom":""},"description":"2m10 x 3m60 x cao 1m80 .","image":"product10.png","category":"Lều 6 người"},{"id":10,"name":"Lều Cắm Trại 12 Người Outwell","price":150000,"timeRent":{"timeTo":"","timeFrom":""},"description":"Kích Thước :Dài 3,5m. Rộng 3,5m . Cao 2m.","image":"product11.png","category":"Lều 12 người"},{"id":11,"name":"Lều Chữ A 15 người","price":80000,"timeRent":{"timeTo":"","timeFrom":""},"description":"Kích Thước :Dài 4,5m. Rộng 3m . Cao 2m.","image":"product12.png","category":"Lều 12 người"},{"id":12,"name":"Lều 10 Người Cao Cấp","price":240000,"timeRent":{"timeTo":"","timeFrom":""},"description":"Kích Thước :Dài 3,5m. Rộng 3,5m . Cao 2m.","image":"product13.png","category":"Lều 12 người"},{"id":13,"name":"Combo Lều 2 Người Cao Cấp","price":120000,"timeRent":{"timeTo":"","timeFrom":""},"description":"Size: 140x200cm","image":"product14.png","category":"Combo 2 người"},{"id":14,"name":"Combo Lều 4 Người NatureHike Cao Cấp","price":170000,"timeRent":{"timeTo":"","timeFrom":""},"description":"Size: 2m1 x 2m1","image":"product15.png","category":"Combo 4 người"},{"id":15,"name":"Combo Lều 6 Người Cao Cấp","price":180000,"timeRent":{"timeTo":"","timeFrom":""},"description":"Size: 2m4 x 2m6","image":"product16.png","category":"Combo 6 người"},{"id":16,"name":"Combo Lều 10 Người Cao Cấp","price":360000,"timeRent":{"timeTo":"","timeFrom":""},"description":"Size: 3m5 x 3m5","image":"product17.png","category":"Combo 12 người"}]'
  // Mảng sản phẩm
  products : Product[] = []
  // Mảng giỏ hàng
  cart : any[] = []
  // Biến tổng tiền giỏ hàng
  total: number = 0;
  // Mảng hóa đơn
  invoices: Invoice[] = []
  // Mảng hóa đơn của user
  userInvoices: Invoice[] = []
  // Tài khoản user đang login
  public userLogin : any 
  // Biến lưu thứ tự hóa đơn đang xem
  userInvoiceIndex: number = 0;

  // Pipe: ArrayFilter input param
  pipeLeuTraiCategory : string = "Lều 2 người"
  pipeComboCategory : string = "Combo 2 người"

  setUserInvoiceIndex(index: number) {
    this.userInvoiceIndex = index;
  }
    // input param set function
  public setPipeLeuTraiCategory(category: string){
    this.pipeLeuTraiCategory = category;
  }
  public setPipeComboCategory(category: string){
    this.pipeComboCategory = category;
  }

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

  loadCart() {
    // Kiểm tra localstorage có chứa giỏ hàng chưa
    if(localStorage.getItem('cart')==null) {
      // Thêm mảng giỏ hàng vào localstorage cho lần chạy đầu tiên
      localStorage.setItem('cart',JSON.stringify(this.cart))
      // Lấy mảng giỏ hàng từ localstorage
      let localCart:string|null= localStorage.getItem('cart');
      if(typeof(localCart)==='string'){
        this.cart = JSON.parse(localCart)
      }
    }
    else {
      // Lấy mảng giỏ hàng từ localstorage
      let localCart:string|null= localStorage.getItem('cart');
      if(typeof(localCart)==='string'){
        this.cart = JSON.parse(localCart)
      }
    }
  }
  
  loadInvoices() {
    // Kiểm tra localstorage có chứa giỏ hàng chưa
    if(localStorage.getItem('invoices')==null) {
      // Thêm mảng giỏ hàng vào localstorage cho lần chạy đầu tiên
      localStorage.setItem('invoices',JSON.stringify(this.invoices))
      // Lấy mảng giỏ hàng từ localstorage
      let localInvoices:string|null= localStorage.getItem('invoices');
      if(typeof(localInvoices)==='string'){
        this.invoices = JSON.parse(localInvoices)
      }
    }
    else {
      // Lấy mảng giỏ hàng từ localstorage
      let localInvoices:string|null= localStorage.getItem('invoices');
      if(typeof(localInvoices)==='string'){
        this.invoices = JSON.parse(localInvoices)
      }
    }
  }

  loadUserLogin() {
    this.userLogin = this.loginService.checkLogin()
  }

  loadUserInvoices() {
    if(this.loginService.checkLogin() != null){
      this.userInvoices = this.invoices.filter((item)=>{
        return item.user.id == this.userLogin.id;
      })
    }
  }

  //============================ Cart Function ===============================
  // Biến lưu số lượng muốn thêm vào giỏ hàng (Dùng để truyền vào hàm addCart)
  cartQuantity: number = 1;
  // Biến lưu số ngày muốn thuê vào giỏ hàng (Dùng để truyền vào hàm addCart)
  cartDaysRent: number = 1;
  // Hàm tăng giá trị biến cartQuantity lên 1
  setCartQuantityPlus() {
    this.cartQuantity++;
  }
  // Hàm giảm giá trị biến cartQuantity xuống 1
  setCartQuantityMinus(){
    if(this.cartQuantity>1){
      this.cartQuantity--;
    }
  }
  // Hàm set giá trị cho biến cartDaysRent
  setCartDaysRent(number:number){
    this.cartDaysRent = number
  }
  // Hàm addCart: Thêm sản phẩm vào mảng cart
  // Param1: Sản phẩm
  // Param2: Số lượng
  // Param3: Số ngày thuê
  addCart(item:Product, quantity:number = 1, daysRent:number = 1){
    // Tạo biến lưu ngày thuê(tmpTimeFrom) và ngày trả(tmpTimeTo) (đối tượng Date) 
    let tmpTimeFrom = new Date();
    let tmpTimeTo = new Date();
    tmpTimeTo.setDate(tmpTimeFrom.getDate()+daysRent)
    // Tạo đối tượng sản phẩm trong giỏ hàng (cartItem), thêm thuộc tính số lượng trong giỏ hàng(inCart)
    let cartItem = {
      id : 0,
      name : "",
      price : 0,
      timeRent : {
          timeTo : tmpTimeTo,
          timeFrom : tmpTimeFrom,
          daysRent : daysRent,
      },
      description : "",
      image : "",
      category : "",
      inCart: 0
    };
    // Gán thông tin sản phẩm người dùng mua vào cartItem
    cartItem.id = item.id;
    cartItem.name = item.name;
    cartItem.price = item.price;
    cartItem.description = item.description;
    cartItem.image = item.image;
    cartItem.category = item.category;
    cartItem.inCart = quantity;

    // Biến flag kiểm tra có sản phẩm trong giỏ hàng không (true = có, false = không)
    let flag:boolean = false;
    // Vòng lặp duyệt mảng cart
    for(let i = 0; i<this.cart.length ; i++){
      // Có sản phẩm trong giỏ hàng
      if(this.cart[i].id == cartItem.id && 
        this.cart[i].timeRent.daysRent == cartItem.timeRent.daysRent){
        flag = true;
        // Thêm số lượng của sản phẩm trong giỏ hàng
        this.cart[i].inCart += cartItem.inCart;
        break;
      }
    }
    // Không có sản phẩm trong giỏ hàng
    if(!flag) {
      // Thêm sản phẩm vào giỏ hàng
      this.cart.push(cartItem);
    }
    // Gán lại giá trị cho biến cartQuantity và cartDaysRent
    this.cartQuantity = 1;
    this.cartDaysRent = 1;
    // Tính lại tổng tiền
    this.totalCart();
    // Cập nhật cart trên localStorage
    localStorage.setItem('cart', JSON.stringify(this.cart))
  }

  // Hàm itemPlus: Tăng 1 số lượng sản phẩm trong giỏ hàng
  // Param1: vị trí của sản phâm trong mảng cart
  itemPlus(index: any) {
    // Tăng số lượng sản phẩm lên 1;
    this.cart[index].inCart++;
    // Tính lại tổng tiền
    this.totalCart();
    // Cập nhật cart trên localStorage
    localStorage.setItem('cart', JSON.stringify(this.cart))
  }

  // Hàm itemMinus: Giảm 1 số lượng sản phẩm trong giỏ hàng
  // Param1: vị trí của sản phâm trong mảng cart
  itemMinus(index: any) {
    // Kiểm tra số lượng của sản phẩm trong giỏ hàng
    if(this.cart[index].inCart>=2){
      // Giảm số lượng của sản phẩm xuống 1
      this.cart[index].inCart--;
    }
    // Tính lại tổng tiền
    this.totalCart();
    // Cập nhật cart trên localStorage
    localStorage.setItem('cart', JSON.stringify(this.cart))
  }

  // Hàm itemDelete: Xóa sản phẩm trong giỏ hàng
  // Param1: vị trí của sản phâm trong mảng cart
  itemDelete(index: any){
    // Xóa 1 phần tử trong mảng
    this.cart.splice(index,1);
    // Tính lại tổng tiền
    this.totalCart();
    // Cập nhật cart trên localStorage
    localStorage.setItem('cart', JSON.stringify(this.cart))
  }
  // Hàm totalCart: Tính tổng tiền của giỏ hàng
  totalCart(){
    this.total = 0;
    this.cart.forEach((item)=>{
      this.total+=((item.price*item.inCart)*item.timeRent.daysRent);
    })
  }
  payCart() {
    // Biến userLogin lưu thông tin User đang đăng nhập
    let userLogin:User = this.loginService.checkLogin()
    // Kiểm tra người dùng đã đăng nhập
    if(userLogin != null){
      if(this.invoices.length>0) {
        // Biến newInvoiceId lưu id cho đơn hàng mới
        var newInvoiceId = this.invoices.slice(-1)[0].invoiceId + 1;
        // Tạo đơn hàng mới
        let newInvoice = new Invoice(newInvoiceId, userLogin, this.cart, this.total)
        this.invoices.push(newInvoice)
      }
      else {
        // Tạo đơn hàng mới
        let newInvoice = new Invoice(0, userLogin, this.cart, this.total)
        this.invoices.push(newInvoice)
      }
      // Reset tổng tiền và giỏ hàng
      this.total = 0;
      this.cart = [];
      // Cập nhật giỏ hàng và danh sách hóa đơn trên localstorage
      localStorage.setItem('cart', JSON.stringify(this.cart))
      localStorage.setItem('invoices', JSON.stringify(this.invoices))
      this.loadUserInvoices()
      alert('Thanh toán thành công')
    }
    else {
      alert('Vui lòng đăng nhập tài khoản để thanh toán')
    }
  }
}
