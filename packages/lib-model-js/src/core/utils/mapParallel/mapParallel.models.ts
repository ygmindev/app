export type MapParallelParamsModel<TType extends unknown> = Array<() => Promise<TType>>;

export type MapParallelModel<TType extends unknown> = Array<TType>;
