export type _GroupByParamsModel<TType extends unknown> = [
  value: Array<TType>,
  by: keyof TType | ((value: TType) => string),
  options?: { isSort?: boolean },
];

export type _GroupByModel<TType extends unknown> = Record<string, Array<TType>>;
