export interface _UseSearchParamsModel<TType> {
  delay?: number;
  keys: Array<string>;
  limit?: number;
  list: Array<TType>;
}

export interface _UseSearchModel<TResult> {
  result: Array<TResult>;
  search(query: string): void;
}
