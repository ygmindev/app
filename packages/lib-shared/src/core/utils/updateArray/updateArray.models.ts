export type UpdateArrayParamsModel<TType extends unknown> = [
  value: Array<TType> | undefined,
  selector: ((v: TType) => boolean) | number,
  update: (v: TType) => TType,
  options?: { isClone?: boolean },
];

export type UpdateArrayModel<TType extends unknown> = Array<TType>;
