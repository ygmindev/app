import {
  type MenuOptionModel,
  type MenuPropsModel,
} from '@lib-frontend/core/components/Menu/Menu.models';
import { type TextFieldPropsModel } from '@lib-frontend/data/components/TextField/TextField.models';
import { type FieldPropsModel, type FieldRefModel } from '@lib-frontend/data/data.models';
import { type TranslatableTextModel } from '@lib-frontend/locale/locale.models';

export type DropdownFieldPropsModel<TType extends MenuOptionModel = MenuOptionModel> =
  TextFieldPropsModel &
    Pick<MenuPropsModel<TType>, 'options' | 'renderOption'> &
    Omit<FieldPropsModel, 'label' | 'error'> & {
      onSearch?(value?: string): void;
      renderValue?(value?: string): TranslatableTextModel | undefined;
    };

export type DropdownFieldRefModel = FieldRefModel;
