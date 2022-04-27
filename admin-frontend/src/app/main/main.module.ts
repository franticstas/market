import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field'

import { WrapperComponent } from './wrapper/wrapper.component';
import { CollectionsComponent } from './pages/collections/collections.component';
import { OrdersComponent } from './pages/orders/orders.component';
//import { ProductsComponent } from './pages/products/products.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { CategoriesComponent } from './pages/categories/categories.component';
//import { ProductPageComponent } from './pages/product-page/product-page.component';
import { CategoryPageComponent } from './pages/category-page/category-page.component';
import { OrderPageComponent } from './pages/order-page/order-page.component';
import { ProductsModule } from './pages/products/products.module';

@NgModule({
  declarations: [
    WrapperComponent,
    CollectionsComponent,
    OrdersComponent,
    // ProductsComponent,
    DashboardComponent,
    LoginPageComponent,
    CategoriesComponent,
   // ProductPageComponent,
    CategoryPageComponent,
    OrderPageComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,

    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatExpansionModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,

    ProductsModule
  ]
})
export class MainModule { }
