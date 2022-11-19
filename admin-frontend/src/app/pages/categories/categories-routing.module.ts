import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContainerComponent } from "../../container/container.component";
import { CategoriesListComponent } from "./categories-list/categories-list.component";
import { CategoryComponent } from "./category/category.component";

const routes: Routes = [
    {
        path: '',
        component: ContainerComponent,
        children: [
            {
                path: '',
                component:  CategoriesListComponent,
                // resolve: { loaded: ProductsResolver }
            },
            {
                path: 'create',
                component:  CategoryComponent,
                // resolve: { loaded: ProductsResolver }
            },
        ]
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class CategoriesRoutingModule { }