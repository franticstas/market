import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "src/app/shared/guards/auth.guard";
import { ContainerComponent } from "../../container/container.component";
import { WrapperComponent } from "../../wrapper/wrapper.component";
import { ProductComponent } from "./product/product.component";
import { ProductsListComponent } from "./products-list/products.component";

const routes: Routes = [
    {
        path: '',
        component: ContainerComponent,
        // canActivate: [AuthGuard],
        children: [
            {
                path: '',
                component:  ProductsListComponent
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