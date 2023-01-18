import type { FieldPropsModel, ForwardedRefPropsModel } from '@lib/frontend/core/core.models';
import type { TextFieldKeyboardModel } from '@lib/frontend/form/components/TextField/TextField.models';
import type { SubmittablePropsModel } from '@lib/frontend/form/form.models';
import type { DimensionModel } from '@lib/frontend/platform/platform.models';
import type { CallableModel } from '@lib/shared/core/core.models';
import type { ReactElement, ReactNode } from 'react';
import type { TextInput, TextInputProps } from 'react-native';

export interface _TextFieldPropsModel
  extends ForwardedRefPropsModel<TextInput>,
    FieldPropsModel,
    SubmittablePropsModel<string>,
    DimensionModel {
  Component?(inputProps: TextInputProps): ReactElement;
  autoComplete?: string | false;
  isActive?: boolean;
  isCenter?: boolean;
  isFocused?: boolean;
  keyboard?: TextFieldKeyboardModel;
  language?: string;
  leftElement?(isActive?: boolean): ReactNode;
  maxLength?: number;
  numberOfLines?: number;
  onBlur?: CallableModel;
  onEscape?: CallableModel;
  onFocus?: CallableModel;
  onRemove?: CallableModel;
  placeholder?: string;
  rightElement?(isActive?: boolean): ReactNode;
}
