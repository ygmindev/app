export interface _SortParamsModel<TType> {
  by?: Array<keyof TType | [keyof TType, boolean] | ((x: TType) => number | boolean)>;
  value: Array<TType>;
}

export type _SortModel<TType> = Array<TType>;
