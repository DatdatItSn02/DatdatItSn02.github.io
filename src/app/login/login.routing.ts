import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { LoginFormComponent } from './page/login-form/login-form.component';
import { RegisterFormComponent } from './page/register-form/register-form.component';

const routes: Routes = [
    {
        path:"auth",
        component:LayoutComponent,
        children:[
            {
                path:"",
                redirectTo:"login",
                pathMatch:"full",
            },
            {
                path:"login",
                component: LoginFormComponent
            },
            {
                path:"register",
                component: RegisterFormComponent
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
