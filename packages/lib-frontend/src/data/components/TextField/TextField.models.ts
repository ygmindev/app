import { type ReactElement } from 'react';

import { type FocusableRefModel } from '#lib-frontend/data/components/FocusableWrapper/FocusableWrapper.models';
import { type _TextFieldPropsModel } from '#lib-frontend/data/components/TextField/_TextField.models';
import { type TEXT_FIELD_KEYBOARD } from '#lib-frontend/data/components/TextField/TextField.constants';
import { type FieldPropsModel } from '#lib-frontend/data/data.models';

export type TextFieldPropsModel = FieldPropsModel &
  Omit<_TextFieldPropsModel, 'foregroundColor' | 'height'> & {
    isNoClear?: boolean;
    leftElement?: ReactElement;
    rightElement?: ReactElement;
  };

export type TextFieldRefModel = FocusableRefModel;

export type TextFieldKeyboardModel = `${TEXT_FIELD_KEYBOARD}`;
