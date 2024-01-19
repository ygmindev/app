import { type SizablePropsModel } from '@lib/frontend/core/core.models';
import { type _TextInputPropsModel } from '@lib/frontend/data/components/TextInput/_TextInput.models';
import { type TEXT_INPUT_KEYBOARD } from '@lib/frontend/data/components/TextInput/TextInput.constants';
import { type InputRefModel, type InputPropsModel } from '@lib/frontend/data/data.models';
import { type ReactElement } from 'react';

export type TextInputPropsModel = InputPropsModel &
  SizablePropsModel &
  Omit<_TextInputPropsModel, 'foregroundColor' | 'height'> & {
    isNoClear?: boolean;
    leftElement?: ReactElement;
    rightElement?: ReactElement;
  };

export type TextInputRefModel = InputRefModel;

export type TextInputKeyboardModel = `${TEXT_INPUT_KEYBOARD}`;
