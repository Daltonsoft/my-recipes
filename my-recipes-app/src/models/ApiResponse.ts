import { AppError } from "./AppError";

export interface ApiResponse<T> {
  data: T | null;
  loading: boolean;
  error: AppError | null;
}