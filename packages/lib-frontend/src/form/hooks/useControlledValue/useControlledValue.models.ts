import type { ValuePropsModel } from '@lib/frontend/core/core.models';

export interface UseControlledValueParamsModel<TType extends string = string>
  extends ValuePropsModel<TType> {}

export interface UseControlledValueModel<TType extends string = string> {
  valueControlled: TType;
  valueControlledSet(value: TType): void;
}
