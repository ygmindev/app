import type { FieldPropsModel } from '@lib/frontend/core/core.models';

export interface UseControlledValueParamsModel<TType extends string = string>
  extends Pick<FieldPropsModel<TType>, 'defaultValue' | 'onChange' | 'value'> {}

export interface UseControlledValueModel<TType extends string = string> {
  setValueControlled(value: TType): void;
  valueControlled: TType;
}
