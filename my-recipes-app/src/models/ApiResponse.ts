import { AppError } from "./AppError";

export interface ApiResponse<T> {
  data: T | null;
  error: AppError | null;
}