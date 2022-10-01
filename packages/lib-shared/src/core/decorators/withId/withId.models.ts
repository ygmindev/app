export interface WithIdModel<TType = string> {
  id: TType;
}

export type WithIdResultModel<TType> = TType extends Array<infer TElement>
  ? Array<TElement & WithIdModel>
  : TType & WithIdModel;
