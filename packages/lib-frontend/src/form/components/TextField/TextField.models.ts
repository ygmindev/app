import { type ReactElement } from 'react';

import { type IconPropsModel } from '#lib-frontend/core/components/Icon/Icon.models';
import {
  type FocusableRefModel,
  type FocusableWrapperPropsModel,
} from '#lib-frontend/form/components/FocusableWrapper/FocusableWrapper.models';
import { type _TextFieldPropsModel } from '#lib-frontend/form/components/TextField/_TextField.models';
import { type TEXT_FIELD_KEYBOARD } from '#lib-frontend/form/components/TextField/TextField.constants';
import { type ValuePropsModel } from '#lib-frontend/form/form.models';
import { type TranslatableTextModel } from '#lib-frontend/locale/locale.models';

export type TextFieldPropsModel = ValuePropsModel &
  FocusableWrapperPropsModel &
  IconPropsModel &
  Omit<_TextFieldPropsModel, 'foregroundColor' | 'height'> & {
    isAutoFocus?: boolean;
    isNoClear?: boolean;
    isTransparent?: boolean;
    label?: TranslatableTextModel;
    leftElement?: ReactElement;
    rightElement?: ReactElement;
  };

export type TextFieldRefModel = FocusableRefModel;

export type TextFieldKeyboardModel = `${TEXT_FIELD_KEYBOARD}`;
