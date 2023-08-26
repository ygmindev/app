import { type MenuPropsModel } from '#lib-frontend/core/components/Menu/Menu.models';
import { type TranslatableOptionModel } from '#lib-frontend/core/core.models';
import { type TextFieldPropsModel } from '#lib-frontend/form/components/TextField/TextField.models';
import { type FieldPropsModel } from '#lib-frontend/form/form.models';
import { type TranslatableTextModel } from '#lib-frontend/locale/locale.models';

export type SelectFieldPropsModel<TType extends string = string> = {
  renderValue?(option: TranslatableOptionModel): TranslatableTextModel;
} & Pick<MenuPropsModel<TType>, 'options' | 'renderOption'> &
  TextFieldPropsModel &
  Omit<FieldPropsModel, 'label' | 'error'>;
