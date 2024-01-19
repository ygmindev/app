import {
  type MenuOptionModel,
  type MenuPropsModel,
} from '@lib/frontend/core/components/Menu/Menu.models';
import { type TextInputPropsModel } from '@lib/frontend/data/components/TextInput/TextInput.models';
import { type InputPropsModel, type InputRefModel } from '@lib/frontend/data/data.models';
import { type TranslatableTextModel } from '@lib/frontend/locale/locale.models';

export type DropdownInputPropsModel<TType extends MenuOptionModel = MenuOptionModel> =
  TextInputPropsModel &
    Pick<MenuPropsModel<TType>, 'options' | 'renderOption'> &
    Omit<InputPropsModel, 'label' | 'error'> & {
      onSearch?(value?: string): void;
      renderValue?(value?: string): TranslatableTextModel | undefined;
    };

export type DropdownInputRefModel = InputRefModel;
