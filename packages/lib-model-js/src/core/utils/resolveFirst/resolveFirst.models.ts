export type ResolveFirstParamsModel<TType extends unknown> = Array<() => Promise<TType>>;

export type ResolveFirstModel<TType extends unknown> = TType;
