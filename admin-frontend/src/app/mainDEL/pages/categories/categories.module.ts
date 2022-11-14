import { NgModule } from "@angular/core";
import { CategoryComponent } from "./category/category.component";
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { MatCardModule } from "@angular/material/card";
import { CategoriesRoutingModule } from "./categories-routing.module";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        CategoryComponent,
        CategoriesListComponent
    ],
    imports: [
        CommonModule,
        MatCardModule,
        MatIconModule,
        MatInputModule,
        MatButtonModule,
        ReactiveFormsModule,
        CategoriesRoutingModule
    ]
})
export class CategoriesModule { }