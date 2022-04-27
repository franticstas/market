import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "src/app/shared/guards/auth.guard";
import { ProductsListComponent } from "./products-list/products.component";

const routes: Routes = [
    {
        path: '',
        component: ProductsListComponent,
        // canActivate: [AuthGuard],
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class ProductsRoutingModule { }