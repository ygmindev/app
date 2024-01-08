import { type MenuPropsModel } from '#lib-frontend/core/components/Menu/Menu.models';
import { type TranslatableOptionModel } from '#lib-frontend/core/core.models';
import { type TextFieldPropsModel } from '#lib-frontend/data/components/TextField/TextField.models';
import { type FieldPropsModel, type FieldRefModel } from '#lib-frontend/data/data.models';
import { type TranslatableTextModel } from '#lib-frontend/locale/locale.models';

export type DropdownFieldPropsModel<TType extends string = string> = TextFieldPropsModel &
  Pick<MenuPropsModel<TType>, 'options' | 'renderOption'> &
  Omit<FieldPropsModel, 'label' | 'error'> & {
    onTextChange?(value?: string): void;
    renderValue?(option: TranslatableOptionModel): TranslatableTextModel;
    textValue?: string;
  };

export type DropdownFieldRefModel<TType extends string = string> = FieldRefModel<TType>;
