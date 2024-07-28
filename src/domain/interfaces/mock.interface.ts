export interface IMock<T> {
  url: string;
  response: T;
  method?: string;
  status?: number;
}
