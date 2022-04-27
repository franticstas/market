import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatSelectModule } from "@angular/material/select";
import { ProductComponent } from "./product/product.component";
import { ProductsListComponent } from "./products-list/products.component";
import { ProductsRoutingModule } from "./products-routing.module";

@NgModule({
    declarations: [
        ProductsListComponent,
        ProductComponent
    ],
    imports: [
        ProductsRoutingModule,
        ReactiveFormsModule,
        MatCardModule,
        MatFormFieldModule,
        MatIconModule,
        MatSelectModule
    ]
})
export class ProductsModule { }