import type { DimensionModel, ElementStateModel } from '@lib/frontend/core/core.models';
import type { TextFieldKeyboardModel } from '@lib/frontend/form/components/TextField/TextField.models';
import type { StringFieldPropsModel, SubmittablePropsModel } from '@lib/frontend/form/form.models';
import type { CallableModel } from '@lib/shared/core/core.models';
import type { ReactElement, ReactNode } from 'react';
import type { TextInputProps } from 'react-native';

export interface _TextFieldPropsModel
  extends Omit<StringFieldPropsModel, 'error' | 'label'>,
    SubmittablePropsModel<string>,
    DimensionModel {
  Component?(inputProps: TextInputProps): ReactElement;
  autoComplete?: string | false;
  error?: string | boolean;
  isCenter?: boolean;
  keyboard?: TextFieldKeyboardModel;
  label?: string;
  language?: string;
  leftElement?(elementState?: ElementStateModel): ReactNode;
  maxLength?: number;
  numberOfLines?: number;
  onEscape?: CallableModel;
  onRemove?: CallableModel;
  placeholder?: string;
  rightElement?(elementState?: ElementStateModel): ReactNode;
}
