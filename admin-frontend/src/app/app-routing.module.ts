import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { ClearLayoutComponent } from 'src/app/layout/clear-layout/clear-layout.component'
import { MainLayoutComponent } from 'src/app/layout/main-layout/main-layout.component'
import { AuthGuard } from './shared/guards/auth.guard'

const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'dashboard',
            },
            {
                path: 'dashboard',
                loadChildren: () =>
                    import('./pages/dashboard/dashboard.module').then(
                        (mod) => mod.DashboardModule
                    ),
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
        ],
    },
    {
        path: '',
        component: ClearLayoutComponent,
        children: [
            {
                path: 'auth',
                loadChildren: () =>
                    import('./pages/auth/auth.module').then(
                        (mod) => mod.AuthModule
                    ),
            },
        ],
    },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
