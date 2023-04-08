export interface InterleaveParamsModel<TType> {
  element: TType;
  values?: Array<TType>;
}

export type InterleaveModel<TType> = Array<TType>;
