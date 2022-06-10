import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import { CategoriesService } from "src/app/shared/services/categories.service";
import { CategoriesActionTypes } from "./categories.action";

@Injectable()
export class CategoriesEffects {
    createCategory$ = createEffect(() => this.actions$.pipe(
        ofType(CategoriesActionTypes.Create),
        mergeMap((category: any) => {            
            const newCreatedCategoryFormData = new FormData();
            newCreatedCategoryFormData.append('name', category.name);
            newCreatedCategoryFormData.append('description', category.description);
            newCreatedCategoryFormData.append('category_image', category.file[0]);            

            return this.categoriesService.createCategory(newCreatedCategoryFormData)
                .pipe(
                    map(() => ({type: CategoriesActionTypes.CreateSuccess})),
                    catchError(() => of({ type: CategoriesActionTypes.CreateFailure}))
                )
        })
    ))

    constructor(
        private actions$: Actions,
        private categoriesService: CategoriesService
    ) {}
}