import type { FieldPropsModel } from '@lib/frontend/core/core.models';

export interface UseFieldParamsModel<TType extends string = string>
  extends Pick<FieldPropsModel<TType>, 'defaultValue' | 'onChange' | 'value'> {}

export interface UseFieldModel<TType extends string = string> {
  fieldValue: TType;
  setFieldValue(value: TType): void;
}
