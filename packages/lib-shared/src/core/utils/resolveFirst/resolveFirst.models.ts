export type ResolveFirstParamsModel<TType> = Array<() => Promise<TType>>;

export type ResolveFirstModel<TType> = TType;
