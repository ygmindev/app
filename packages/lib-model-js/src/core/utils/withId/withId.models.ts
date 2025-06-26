export type WithIdModel<TType extends string = string> = {
  id: TType;
};

export type WithIdResultModel<TType extends unknown> =
  TType extends Array<infer TElement> ? Array<TElement & WithIdModel> : TType & WithIdModel;
