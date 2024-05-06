export type UpdateArrayParamsModel<TType> = [
  value: Array<TType> | undefined,
  selector: (v: TType) => boolean,
  update: (v: TType) => TType,
  options?: { isClone?: boolean },
];

export type UpdateArrayModel<TType> = Array<TType>;
