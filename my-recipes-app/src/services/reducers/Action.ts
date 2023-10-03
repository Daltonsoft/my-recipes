import { AppError } from "../../models/AppError";

export type ReducerAction<T> =
  | { type: "FETCH_REQUEST" }
  | { type: "FETCH_SUCCESS"; payload: T }
  | { type: "FETCH_ERROR"; payload: AppError };