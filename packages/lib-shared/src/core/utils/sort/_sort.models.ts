export type _SortParamsModel<TType extends unknown> = {
  by?: Array<keyof TType | [keyof TType, boolean] | ((x: TType) => number | boolean)>;
  value: Array<TType>;
};

export type _SortModel<TType extends unknown> = Array<TType>;
