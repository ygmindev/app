import type { _TextFieldPropsModel } from '@lib/frontend/form/components/TextField/_TextField.models';
import type { TEXT_FIELD_KEYBOARD } from '@lib/frontend/form/components/TextField/TextField.constants';
import type { ReactNode } from 'react';

export type TextFieldKeyboardModel = `${TEXT_FIELD_KEYBOARD}`;

export interface TextFieldPropsModel extends _TextFieldPropsModel {
  isNoClear?: boolean;
  leftElement?: ReactNode | ((isFocused: boolean) => ReactNode);
  mask?: string;
  rightElement?: ReactNode | ((isFocused: boolean) => ReactNode);
}
