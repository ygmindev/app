export type RemoveParamsModel<TType extends Array<unknown>> = [
  value: TType,
  selector: number | ((v: TType[number]) => boolean),
  isFirstOnly?: boolean,
];

export type RemoveModel<TType extends Array<unknown>> = TType;
