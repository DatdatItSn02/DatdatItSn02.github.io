import { Component, OnInit } from '@angular/core';
import { Invoice } from 'src/app/modules/invoices.module';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {

  constructor() { }

  // Mảng hóa đơn
  invoices: Invoice[] = []

  // Biến lưu thứ tự hóa đơn đang xem
  invoiceIndex: number = 0;

  // Pipe: orderBy input params
  orderByType:string = "id";
  orderByReverse:boolean = true;

  ngOnInit(): void {
    this.loadInvoices()
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

  // Phương thức update modal xem chi tiết
  viewInvoice(index:any) {
    this.invoiceIndex = index
  }

  // Phương thức thay đổi input của pipe orderBy 
  orderByChange(type:string){
    this.orderByType = type;
    this.orderByReverse = !this.orderByReverse
  }
  
}
