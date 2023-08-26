import { type _TextFieldPropsModel } from '#lib-frontend/form/components/TextField/_TextField.models';
import { type TEXT_FIELD_KEYBOARD } from '#lib-frontend/form/components/TextField/TextField.constants';
import { type TranslatableFieldPropsModel } from '#lib-frontend/form/form.models';

export type TextFieldKeyboardModel = `${TEXT_FIELD_KEYBOARD}`;

export type TextFieldRefModel = {
  blur(): void;
  focus(): void;
};

export type TextFieldPropsModel = TranslatableFieldPropsModel &
  Omit<_TextFieldPropsModel, 'error' | 'label'> & {
    isNoClear?: boolean;
    mask?: string;
  };
