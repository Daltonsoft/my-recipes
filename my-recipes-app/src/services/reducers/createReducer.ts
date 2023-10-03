import { Reducer } from "react";
import { ApiResponse } from "../../models/ApiResponse";
import { ReducerAction } from "./Action";

export const createReducer = <T>() => {
    const reducer: Reducer<ApiResponse<T>, ReducerAction<T>> = (
        state: ApiResponse<T>,
        action: ReducerAction<T>
    ): ApiResponse<T> => {
        switch (action.type) {
            case "FETCH_REQUEST":
                return { ...state, loading: true, error: null };
            case "FETCH_SUCCESS":
                return { ...state, data: action.payload, loading: false, error: null };
            case "FETCH_ERROR":
                console.error(action.type, action.payload);
                return { ...state, data: null, loading: false, error: action.payload };
            default:
                return state;
        }
    };
    return reducer;
};
