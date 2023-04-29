export interface InterleaveParamsModel<TType> {
  element: TType;
  value?: Array<TType>;
}

export type InterleaveModel<TType> = Array<TType>;
