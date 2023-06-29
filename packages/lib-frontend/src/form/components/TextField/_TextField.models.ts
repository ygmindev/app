import { type ReactElement, type ReactNode } from 'react';
import { type TextInputProps } from 'react-native';

import { type DimensionModel } from '#lib-frontend/core/core.models';
import { type TextFieldKeyboardModel } from '#lib-frontend/form/components/TextField/TextField.models';
import { type StringFieldPropsModel } from '#lib-frontend/form/form.models';
import { type CallableModel } from '#lib-shared/core/core.models';

export type _TextFieldPropsModel = {
  Component?(inputProps: TextInputProps): ReactElement;
  autoComplete?: string | false;
  error?: string | boolean;
  isCenter?: boolean;
  keyboard?: TextFieldKeyboardModel;
  label?: string;
  language?: string;
  leftElement?: ReactNode;
  maxLength?: number;
  numberOfLines?: number;
  onEscape?: CallableModel;
  onRemove?: CallableModel;
  onSubmit?: CallableModel;
  placeholder?: string;
  rightElement?: ReactNode;
} & Omit<StringFieldPropsModel, 'error' | 'label'> &
  DimensionModel;
