import type {
  FieldPropsModel,
  ForwardedRefPropsModel,
  StylePropsModel,
} from '@lib/frontend/core/core.models';
import type { TextFieldKeyboardModel } from '@lib/frontend/form/components/TextField/TextField.models';
import type { WithSubmitPropsModel } from '@lib/frontend/form/decorators/withSubmitProps/withSubmitProps.models';
import type { FontAlignModel } from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.models';
import type { TestIdPropsModel } from '@lib/frontend/test/test.models';
import type { CallableModel } from '@lib/shared/core/core.models';
import type { ReactElement, ReactNode } from 'react';
import type { TextInput, TextInputProps } from 'react-native';

export interface _TextFieldPropsModel
  extends ForwardedRefPropsModel<TextInput>,
    FieldPropsModel,
    WithSubmitPropsModel<string>,
    StylePropsModel,
    TestIdPropsModel {
  Component?(inputProps: TextInputProps): ReactElement;
  align?: FontAlignModel;
  autoComplete?: string | false;
  isActive?: boolean;
  isFocused?: boolean;
  isTransparent?: boolean;
  keyboard?: TextFieldKeyboardModel;
  left?: ReactNode;
  maxLength?: number;
  numberOfLines?: number;
  onBlur?: CallableModel;
  onEscape?: CallableModel;
  onFocus?: CallableModel;
  onRemove?: CallableModel;
  placeholder?: string;
  right?: ReactNode;
  width?: number;
}
