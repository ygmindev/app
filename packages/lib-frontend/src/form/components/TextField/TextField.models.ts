import type { _TextFieldPropsModel } from '#lib-frontend/form/components/TextField/_TextField.models';
import type { TEXT_FIELD_KEYBOARD } from '#lib-frontend/form/components/TextField/TextField.constants';
import type { TranslatableFieldPropsModel } from '#lib-frontend/form/form.models';
import type { CallableModel } from '#lib-shared/core/core.models';

export type TextFieldKeyboardModel = `${TEXT_FIELD_KEYBOARD}`;

export type TextFieldRefModel = {
  blur: CallableModel;
  focus: CallableModel;
};

export type TextFieldPropsModel = {
  isNoClear?: boolean;
  mask?: string;
} & TranslatableFieldPropsModel<_TextFieldPropsModel>;
