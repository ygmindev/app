export type _UseSearchParamsModel<TType> = {
  delay?: number;
  keys: Array<string>;
  limit?: number;
  list: Array<TType>;
  onChange?(value: string): void;
};

export type _UseSearchModel<TResult> = {
  query?: string;
  result: Array<TResult>;
  search(query: string): void;
};
