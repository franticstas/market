import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { ProductComponent } from "./product/product.component";
import { ProductsListComponent } from "./products-list/products-list.component";
import { ProductsRoutingModule } from "./products-routing.module";
import { ProductPreviewComponent } from './product-preview/product-preview.component';

@NgModule({
    declarations: [
        ProductsListComponent,
        ProductComponent,
        ProductPreviewComponent
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
    ]
})
export class ProductsModule { }