import type { ElementStateModel, FieldPropsModel } from '@lib/frontend/core/core.models';
import type { TextFieldKeyboardModel } from '@lib/frontend/form/components/TextField/TextField.models';
import type { SubmittablePropsModel } from '@lib/frontend/form/form.models';
import type { DimensionModel } from '@lib/frontend/platform/platform.models';
import type { CallableModel } from '@lib/shared/core/core.models';
import type { ReactElement, ReactNode } from 'react';
import type { TextInputProps } from 'react-native';

export interface _TextFieldPropsModel
  extends FieldPropsModel,
    SubmittablePropsModel<string>,
    DimensionModel {
  Component?(inputProps: TextInputProps): ReactElement;
  autoComplete?: string | false;
  isCenter?: boolean;
  keyboard?: TextFieldKeyboardModel;
  language?: string;
  leftElement?(elementState?: ElementStateModel): ReactNode;
  maxLength?: number;
  numberOfLines?: number;
  onBlur?: CallableModel;
  onEscape?: CallableModel;
  onFocus?: CallableModel;
  onRemove?: CallableModel;
  placeholder?: string;
  rightElement?(elementState?: ElementStateModel): ReactNode;
}
