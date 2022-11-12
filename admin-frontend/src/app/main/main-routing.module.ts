import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AuthGuard } from '../shared/guards/auth.guard'
import { DashboardComponent } from './pages/dashboard/dashboard.component'
// import { LoginPageComponent } from './pages/login-page/login-page.component'
import { OrdersComponent } from './pages/orders/orders.component'
import { WrapperComponent } from './wrapper/wrapper.component'

const routes: Routes = [
    // {
    //     path: 'login',
    //     component: LoginPageComponent,
    // },
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
        loadChildren: () =>
            import('./pages/products/products.module').then(
                (mod) => mod.ProductsModule
            ),
        canActivate: [AuthGuard],
    },
    {
        path: 'categories',
        loadChildren: () =>
            import('./pages/categories/categories.module').then(
                (mod) => mod.CategoriesModule
            ),
        canActivate: [AuthGuard],
    },
    {
        path: 'orders',
        component: OrdersComponent,
        canActivate: [AuthGuard],
    },
    // {
    //     path: 'collections',
    //     component: CategoriesComponent,
    //     canActivate: [AuthGuard],
    // },
    {
        path: '**',
        redirectTo: '/dashboard',
        pathMatch: 'full',
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class MainRoutingModule {}
