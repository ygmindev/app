export type _UseSearchParamsModel<TType> = {
  delay?: number;
  items: Array<TType>;
  keys: Array<string>;
  limit?: number;
  onChange?(value: string): void;
};

export type _UseSearchModel<TResult> = {
  query?: string;
  result: Array<TResult>;
  search(query: string): void;
};
