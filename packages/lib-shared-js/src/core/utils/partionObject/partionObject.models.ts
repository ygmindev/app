// COMPLETE
import { type PartialModel } from '@lib/shared/core/core.models';

export type PartionObjectParamsModel<TType extends Record<string, unknown>> = [
  value: TType,
  fn: (v: TType[typeof k], k: keyof TType) => boolean,
];

export type PartionObjectModel<TType extends Record<string, unknown>> = [
  valueTrue: PartialModel<TType>,
  valueFalse: PartialModel<TType>,
];
