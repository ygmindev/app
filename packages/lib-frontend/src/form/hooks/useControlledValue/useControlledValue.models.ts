import type { ValuePropsModel } from '#lib-frontend/core/core.models';

export type UseControlledValueParamsModel<TType extends string = string> = ValuePropsModel<TType>;

export type UseControlledValueModel<TType extends string = string> = {
  valueControlled: TType;
  valueControlledSet(value: TType): void;
};
