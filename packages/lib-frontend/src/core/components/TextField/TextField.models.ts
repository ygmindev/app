import type { _TextFieldPropsModel } from '@lib/frontend/core/components/TextField/_TextField.models';
import type { TEXT_FIELD_TYPE } from '@lib/frontend/core/components/TextField/TextField.constants';
import type { WithFieldPropsModel } from '@lib/frontend/core/decorators/withFieldProps/withFieldProps.models';
import type { ReactNode } from 'react';

export type TextFieldTypeModel = `${TEXT_FIELD_TYPE}`;

export interface TextFieldPropsModel<TType = string>
  extends Omit<_TextFieldPropsModel, keyof WithFieldPropsModel<TType> | 'left' | 'right'>,
    Omit<WithFieldPropsModel<TType>, 'defaultValue'> {
  defaultValue: TType;
  isNoClear?: boolean;
  left?: ReactNode | ((isFocused: boolean) => ReactNode);
  right?: ReactNode | ((isFocused: boolean) => ReactNode);
}
