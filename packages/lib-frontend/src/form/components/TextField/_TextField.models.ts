import { type ReactElement, type ReactNode } from 'react';
import { type TextInputProps } from 'react-native';

import { type DimensionModel } from '#lib-frontend/core/core.models';
import { type TextFieldKeyboardModel } from '#lib-frontend/form/components/TextField/TextField.models';
import { type FieldPropsModel } from '#lib-frontend/form/form.models';

export type _TextFieldPropsModel = Omit<FieldPropsModel, 'error' | 'label'> &
  DimensionModel & {
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
    onEscape?(): void;
    onRemove?(): void;
    onSubmit?(): void;
    placeholder?: string;
    rightElement?: ReactNode;
  };
