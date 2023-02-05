import type { ValuePropsModel } from '@lib/frontend/core/core.models';

export interface UseControlledValueParamsModel<TType = string> extends ValuePropsModel<TType> {}

export interface UseControlledValueModel<TType = string> {
  setValueControlled(value: TType): void;
  valueControlled: TType;
}
