export type UpdateArrayParamsModel<TType extends unknown> = [
  value: Array<TType> | undefined,
  selector: ((v: TType) => boolean) | number,
  update: (v?: TType) => TType | undefined,
  options?: { isClone?: boolean; isUpsert?: boolean },
];

export type UpdateArrayModel<TType extends unknown> = Array<TType>;
