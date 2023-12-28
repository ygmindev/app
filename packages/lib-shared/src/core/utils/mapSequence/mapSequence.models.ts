export type MapSequenceParamsModel<TType extends unknown> = Array<() => Promise<TType>>;

export type MapSequenceModel<TType extends unknown> = Array<TType>;
