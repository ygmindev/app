import type { _TextFieldPropsModel } from '@lib/frontend/form/components/TextField/_TextField.models';
import type { TEXT_FIELD_KEYBOARD } from '@lib/frontend/form/components/TextField/TextField.constants';
import type { TranslatableFieldPropsModel } from '@lib/frontend/locale/locale.models';

export type TextFieldKeyboardModel = `${TEXT_FIELD_KEYBOARD}`;

export interface TextFieldPropsModel extends TranslatableFieldPropsModel<_TextFieldPropsModel> {
  isNoClear?: boolean;
  mask?: string;
}
