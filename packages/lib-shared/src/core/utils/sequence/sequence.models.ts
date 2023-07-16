export type SequenceParamsModel<TType> = Array<() => Promise<TType>>;

export type SequenceModel<TType> = Array<TType>;
