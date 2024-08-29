import { type StringKeyModel } from '@lib/shared/core/core.models';

export type CartesianObjectParamsModel<TType extends Record<string, unknown>> = {
  [TKey in StringKeyModel<TType>]?: Array<TType[TKey]>;
};

export type CartesianObjectModel<TType extends Record<string, unknown>> = Array<TType>;
