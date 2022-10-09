import type { _TextFieldPropsModel } from '@lib/frontend/core/components/TextField/_TextField.models';
import type { TEXT_FIELD_TYPE } from '@lib/frontend/core/components/TextField/TextField.constants';
import type { ReactNode } from 'react';

export type TextFieldTypeModel = `${TEXT_FIELD_TYPE}`;

export interface TextFieldPropsModel extends _TextFieldPropsModel {
  isNoClear?: boolean;
  leftElement?: ReactNode | ((isFocused: boolean) => ReactNode);
  rightElement?: ReactNode | ((isFocused: boolean) => ReactNode);
}
