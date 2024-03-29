import {
  type MenuOptionModel,
  type MenuPropsModel,
} from '@lib/frontend/core/components/Menu/Menu.models';
import { type ElementStateModel } from '@lib/frontend/core/core.models';
import { type TextInputPropsModel } from '@lib/frontend/data/components/TextInput/TextInput.models';
import { type InputPropsModel, type InputRefModel } from '@lib/frontend/data/data.models';
import { type TranslatableTextModel } from '@lib/frontend/locale/locale.models';
import { type ReactElement } from 'react';

export type MenuInputPropsModel<TType extends MenuOptionModel = MenuOptionModel> = Omit<
  TextInputPropsModel,
  'rightElement'
> &
  Pick<MenuPropsModel<TType>, 'options' | 'renderOption'> &
  Omit<InputPropsModel, 'label' | 'error'> & {
    onSearch?(value?: string): void;
    renderValue?(value?: string): TranslatableTextModel | undefined;
    rightElement?: (elementState?: ElementStateModel) => ReactElement | null;
    textDefaultValue?: string;
  };

export type MenuInputRefModel = InputRefModel;
