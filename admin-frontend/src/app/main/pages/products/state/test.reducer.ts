import { Action, createReducer } from "@ngrx/store";
import { ITest } from "src/app/shared/models/test.model";

export const initialState: ITest = {
    count: 0
}

const testReducer = createReducer(
    initialState
)

export function reducer(state: ITest | undefined, action: Action) {
    return testReducer(state, action);
}