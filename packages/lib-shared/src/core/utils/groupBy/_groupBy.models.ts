export type _GroupByParamsModel<TType> = [
  value: Array<TType>,
  by: keyof TType | ((value: TType) => string),
  options?: { isSort?: boolean },
];

export type _GroupByModel<TType> = Record<string, Array<TType>>;
