import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ProductsListComponent } from './containers/products-list/products-list.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductPreviewComponent } from './containers/product-preview/product-preview.component';
import { MatTableModule } from '@angular/material/table';
import { EditProductComponent } from './containers/edit-product/edit-product.component';
import { ProductsListTableComponent } from './components/products-list-table/products-list-table.component';
import { AddProductComponent } from './containers/add-product/add-product.component';

@NgModule({
    declarations: [
        ProductsListComponent,
        ProductPreviewComponent,
        AddProductComponent,
        EditProductComponent,
        ProductsListTableComponent,
    ],
    imports: [
        CommonModule,
        ProductsRoutingModule,
        ReactiveFormsModule,
        MatCardModule,
        MatFormFieldModule,
        MatIconModule,
        MatSelectModule,
        MatInputModule,
        MatButtonModule,
        MatTableModule,
    ],
})
export class ProductsModule {}
