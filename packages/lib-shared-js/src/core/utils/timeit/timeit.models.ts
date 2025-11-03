import { type ReturnTypeModel } from '@lib/shared/core/core.models';

export type TimeitParamsModel<TType extends (() => unknown) | (() => Promise<unknown>)> = [
  fn: TType,
  isVerbose?: boolean,
];

export type TimeitModel<TType extends (() => unknown) | (() => Promise<unknown>)> =
  TType extends () => Promise<unknown>
    ? Promise<[result: ReturnTypeModel<TType>, number]>
    : [result: ReturnTypeModel<TType>, number];
