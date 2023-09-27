import { AppError } from "./AppError";

export interface ApiResponse {
  data: object | null;
  error: AppError | null;
}