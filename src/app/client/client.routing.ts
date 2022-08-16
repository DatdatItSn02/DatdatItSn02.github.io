import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
    {
        path:"clients",
        component:LayoutComponent,
        children:[
            {
                path:"",
                redirectTo:"home",
                pathMatch:"full",
            },
            {
                path:"home",
                component: HomeComponent
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
