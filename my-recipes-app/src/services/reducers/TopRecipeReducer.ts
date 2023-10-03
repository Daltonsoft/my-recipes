import { Reducer } from "react";
import { ApiResponse } from "../../models/ApiResponse";
import { ReducerAction } from "./Action";
import { RecipeTileModel } from "src/models/RecipeTileModel";

export const TopRecipeReducer: Reducer<ApiResponse<Array<RecipeTileModel>>, ReducerAction<Array<RecipeTileModel>>> = (
    state: ApiResponse<Array<RecipeTileModel>>,
    action: ReducerAction<Array<RecipeTileModel>>
): ApiResponse<Array<RecipeTileModel>> => {
    switch (action.type) {
        case "FETCH_REQUEST":
            return { ...state, loading: true, error: null };
        case "FETCH_SUCCESS":
            return { ...state, data: action.payload, loading: false, error: null };
        case "FETCH_ERROR":
            console.error("FETCH_ERROR", action.payload);
            return { ...state, data: null, loading: false, error: action.payload };
        default:
            return state;
    }
};
