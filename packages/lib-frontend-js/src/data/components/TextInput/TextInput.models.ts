import { type SizablePropsModel } from '@lib/frontend/core/core.models';
import { type _TextInputPropsModel } from '@lib/frontend/data/components/TextInput/_TextInput.models';
import { type InputPropsModel, type InputRefModel } from '@lib/frontend/data/data.models';
import { type ReactElement } from 'react';

export type TextInputPropsModel = Omit<InputPropsModel, 'onSubmit'> &
  SizablePropsModel &
  Omit<_TextInputPropsModel, 'foregroundColor' | 'height'> & {
    isAutoFocus?: boolean;
    isClearable?: boolean;
    isRightElementFixed?: boolean;
    leftElement?: ReactElement | null;
    rightElement?: ReactElement | null;
    onClear?(): void;
  };

export type TextInputRefModel = Pick<InputRefModel, 'blur' | 'focus' | 'submit'>;
