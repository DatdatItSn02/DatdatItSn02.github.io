import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoicesComponent } from './pages/invoices/invoices.component';
import { AdminRoutingModule } from './admin.routing';
import { UsersComponent } from './pages/users/users.component';
import { ProductsComponent } from './pages/products/products.component';
import { LayoutComponent } from './layout/layout.component';
import { FormsModule } from '@angular/forms';
import { OrderByPipe } from '../pipes/order-by.pipe';



@NgModule({
  declarations: [
    LayoutComponent,
    InvoicesComponent,
    UsersComponent,
    ProductsComponent,
    OrderByPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
