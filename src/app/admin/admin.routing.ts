import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../guard/admin.guard';
import { LayoutComponent } from './layout/layout.component';
import { InvoicesComponent } from './pages/invoices/invoices.component';
import { ProductsComponent } from './pages/products/products.component';
import { UsersComponent } from './pages/users/users.component';
const routes: Routes = [
    {
        path:"admin",
        component:LayoutComponent,
        canActivateChild: [AdminGuard],
        children:[
            {
                path:"",
                redirectTo:"products",
                pathMatch:"full",
            },
            {
                path:"products",
                component: ProductsComponent
            },
            {
                path:"users",
                component: UsersComponent
            },
            {
                path:"invoices",
                component: InvoicesComponent
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
