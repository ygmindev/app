import { type SizablePropsModel } from '@lib/frontend/core/core.models';
import { type _TextInputPropsModel } from '@lib/frontend/data/components/TextInput/_TextInput.models';
import {
  type TEXT_INPUT_KEY,
  type TEXT_INPUT_KEYBOARD,
} from '@lib/frontend/data/components/TextInput/TextInput.constants';
import { type InputPropsModel, type InputRefModel } from '@lib/frontend/data/data.models';
import { type ReactElement } from 'react';

export type TextInputPropsModel = InputPropsModel &
  SizablePropsModel &
  Omit<_TextInputPropsModel, 'foregroundColor' | 'height'> & {
    isClearable?: boolean;
    isRightElementFixed?: boolean;
    leftElement?: ReactElement | null;
    rightElement?: ReactElement | null;
  };

export type TextInputRefModel = InputRefModel;

export type TextInputKeyboardModel = `${TEXT_INPUT_KEYBOARD}`;

export type TextInputKeyModel = `${TEXT_INPUT_KEY}`;
