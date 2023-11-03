export type SequenceParamsModel<TType extends unknown> = Array<() => Promise<TType>>;

export type SequenceModel<TType extends unknown> = Array<TType>;
