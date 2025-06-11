export type _PartitionParamsModel<
  TType extends unknown,
  TCondition extends TType,
  TIsIndex extends boolean = false,
> = [params: Array<TType>, condition: (v: TType) => v is TCondition, isIndex?: TIsIndex];

export type _PartitionModel<
  TType extends unknown,
  TCondition extends TType,
  TIsIndex extends boolean = false,
> = TIsIndex extends true
  ? [
      [valuesTrue: Array<TCondition>, valuesFalse: Array<Exclude<TType, TCondition>>],
      [Array<number>, Array<number>],
    ]
  : [valuesTrue: Array<TCondition>, valuesFalse: Array<Exclude<TType, TCondition>>];
