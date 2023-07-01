export type WithIdModel<TType extends string = string> = {
  id: TType;
};

export type WithIdResultModel<TType> = TType extends Array<infer TElement>
  ? Array<TElement & WithIdModel>
  : TType & WithIdModel;
