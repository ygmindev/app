export type _SortParamsModel<TType extends unknown> = [
  value: Array<TType>,
  by?: Array<keyof TType | [keyof TType, boolean] | ((x: TType) => number | boolean)>,
];

export type _SortModel<TType extends unknown> = Array<TType>;
