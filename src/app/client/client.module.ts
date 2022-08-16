import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { ClientRoutingModule } from './client.routing';
import { HomeComponent } from './pages/home/home.component';
import { ArrayFilterPipe } from '../pipes/array-filter.pipe';
import { SearchFilterPipe } from '../pipes/search-filter.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LayoutComponent,
    HomeComponent,
    ArrayFilterPipe,
    SearchFilterPipe,
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    FormsModule
  ]
})
export class ClientModule { }
