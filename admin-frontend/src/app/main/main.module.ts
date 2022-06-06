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
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';

import { WrapperComponent } from './wrapper/wrapper.component';
import { CollectionsComponent } from './pages/collections/collections.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CategoryPageComponent } from './pages/category-page/category-page.component';
import { OrderPageComponent } from './pages/order-page/order-page.component';
import { ProductsModule } from './pages/products/products.module';
import { ContainerComponent } from './container/container.component';

@NgModule({
  declarations: [
    WrapperComponent,
    CollectionsComponent,
    OrdersComponent,
    DashboardComponent,
    LoginPageComponent,
    ContainerComponent,
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
    MatTableModule,
    MatPaginatorModule,

    ProductsModule
  ]
})
export class MainModule { }
