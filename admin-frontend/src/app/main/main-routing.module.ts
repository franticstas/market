import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../shared/guards/auth.guard';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ProductsComponent } from './pages/products/products.component';
import { WrapperComponent } from './wrapper/wrapper.component';


const routes: Routes = [
    {
        path: 'login', component: LoginPageComponent
    },
    { 
        path: '',
        component: WrapperComponent,
        pathMatch: 'full',
        redirectTo: 'dashboard',
        canActivate: [AuthGuard],
        
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'products',
        component: ProductsComponent,
        canActivate: [AuthGuard],
    },
    {
        path: '**',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }