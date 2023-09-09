export type WithIdModel<TType extends string = string> = {
  _id: TType;
};

export type WithIdResultModel<TType> = TType extends Array<infer TElement>
  ? Array<TElement & WithIdModel>
  : TType & WithIdModel;
