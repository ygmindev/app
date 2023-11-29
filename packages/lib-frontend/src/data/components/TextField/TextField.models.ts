import { type ReactElement } from 'react';

import { type SizablePropsModel } from '#lib-frontend/core/core.models';
import { type _TextFieldPropsModel } from '#lib-frontend/data/components/TextField/_TextField.models';
import { type TEXT_FIELD_KEYBOARD } from '#lib-frontend/data/components/TextField/TextField.constants';
import { type FieldPropsModel, type FieldRefModel } from '#lib-frontend/data/data.models';

export type TextFieldPropsModel = FieldPropsModel &
  SizablePropsModel &
  Omit<_TextFieldPropsModel, 'foregroundColor' | 'height'> & {
    isNoClear?: boolean;
    leftElement?: ReactElement;
    rightElement?: ReactElement;
  };

export type TextFieldRefModel = FieldRefModel;

export type TextFieldKeyboardModel = `${TEXT_FIELD_KEYBOARD}`;
