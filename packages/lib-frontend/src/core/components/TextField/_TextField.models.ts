import type { TextFieldTypeModel } from '@lib/frontend/core/components/TextField/TextField.models';
import type { WithFieldPropsModel } from '@lib/frontend/core/decorators/withFieldProps/withFieldProps.models';
import type { WithForwardedRefPropsModel } from '@lib/frontend/core/decorators/withForwardRefProps/withForwardRefProps.models';
import type { WithSubmitPropsModel } from '@lib/frontend/core/decorators/withSubmitProps/withSubmitProps.models';
import type { WithStyleParamsModel } from '@lib/frontend/styling/decorators/withStyle/withStyle.models';
import type { FontAlignModel } from '@lib/frontend/styling/utils/styler/fontStyler/fontStyler.models';
import type { WithTestIdModel } from '@lib/frontend/testing/testing.models';
import type { CallableModel } from '@lib/shared/core/core.models';
import type { ReactElement, ReactNode } from 'react';
import type { TextInput, TextInputProps } from 'react-native';

export interface _TextFieldPropsModel
  extends WithForwardedRefPropsModel<TextInput>,
    WithFieldPropsModel,
    WithSubmitPropsModel<string>,
    WithStyleParamsModel,
    WithTestIdModel {
  Component?(inputProps: TextInputProps): ReactElement;
  align?: FontAlignModel;
  autoComplete?: string | false;
  isActive?: boolean;
  isFocused?: boolean;
  isTransparent?: boolean;
  left?: ReactNode;
  maxLength?: number;
  numberOfLines?: number;
  onBlur?: CallableModel;
  onEscape?: CallableModel;
  onFocus?: CallableModel;
  onRemove?: CallableModel;
  placeholder?: string;
  right?: ReactNode;
  type?: TextFieldTypeModel;
  width?: number;
}
