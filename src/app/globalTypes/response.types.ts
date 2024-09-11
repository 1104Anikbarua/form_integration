export interface IResponse<T, U> {
  success: boolean;
  statusCode: number;
  message: string;
  meta?: U;
  data: T;
}
