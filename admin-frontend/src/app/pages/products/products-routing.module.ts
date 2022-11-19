import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddProductComponent } from './containers/add-product/add-product.component';
import { EditProductComponent } from './containers/edit-product/edit-product.component';
import { ProductsListComponent } from './containers/products-list/products-list.component';
import { ProductsResolver } from './store/resolvers/products.resolve';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: ProductsListComponent,
                resolve: { loaded: ProductsResolver },
            },
            {
                path: 'create',
                component: AddProductComponent,
            },
            {
                path: 'update/:id',
                component: EditProductComponent,
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ProductsRoutingModule {}
