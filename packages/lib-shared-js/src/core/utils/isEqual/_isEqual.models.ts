import { type IsEqualOptionsModel } from '@lib/shared/core/utils/isEqual/isEqual.model';

export type _IsEqualParamsModel<TType = unknown> = [
  x: TType | undefined,
  y: TType | undefined,
  options?: IsEqualOptionsModel<TType>,
];

export type _IsEqualModel = boolean;
