import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "src/app/shared/guards/auth.guard";
import { ContainerComponent } from "../../container/container.component";
import { WrapperComponent } from "../../wrapper/wrapper.component";
import { ProductComponent } from "./product/product.component";
import { ProductsListComponent } from "./products-list/products-list.component";
import { ProductsResolver } from "./resolver/products.resolve";

const routes: Routes = [
    {
        path: '',
        component: ContainerComponent,
        children: [
            {
                path: '',
                component:  ProductsListComponent,
                resolve: { loaded: ProductsResolver }
            },
            {
                path: 'create',
                component:  ProductComponent
            }
        ]
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class ProductsRoutingModule { }