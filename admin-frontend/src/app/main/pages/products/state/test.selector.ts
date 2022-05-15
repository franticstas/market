import { createSelector } from "@ngrx/store";
import { ITest } from "src/app/shared/models/test.model";

export interface AppState {
    test: ITest;
}

const selectTest = (state: AppState) => state.test

export const selectTestCount = createSelector(
    selectTest,
    (state: ITest) => state.count
)
