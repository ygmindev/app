import type { WithFieldPropsModel } from '@lib/frontend/core/decorators/withFieldProps/withFieldProps.models';

export interface UseFieldParamsModel<TType extends string = string>
  extends Pick<WithFieldPropsModel<TType>, 'defaultValue' | 'onChange' | 'value'> {}

export interface UseFieldModel<TType extends string = string> {
  fieldValue: TType;
  setFieldValue(value: TType): void;
}
