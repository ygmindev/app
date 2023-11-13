import { type MenuPropsModel } from '#lib-frontend/core/components/Menu/Menu.models';
import { type TranslatableOptionModel } from '#lib-frontend/core/core.models';
import { type TextFieldPropsModel } from '#lib-frontend/data/components/TextField/TextField.models';
import { type FieldPropsModel } from '#lib-frontend/data/data.models';
import { type TranslatableTextModel } from '#lib-frontend/locale/locale.models';

export type DropdownFieldPropsModel<TType extends string = string> = TextFieldPropsModel &
  Pick<MenuPropsModel<TType>, 'options' | 'renderOption'> &
  Omit<FieldPropsModel, 'label' | 'error'> & {
    renderValue?(option: TranslatableOptionModel): TranslatableTextModel;
  };
