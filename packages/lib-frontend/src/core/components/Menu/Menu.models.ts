import {
  type DropdownPropsModel,
  type DropdownRefModel,
} from '@lib/frontend/core/components/Dropdown/Dropdown.models';
import { type PressablePropsModel } from '@lib/frontend/core/components/Pressable/Pressable.models';
import { type TranslatableOptionModel } from '@lib/frontend/core/core.models';
import { type InputPropsModel } from '@lib/frontend/data/data.models';
import { type TranslatableTextModel } from '@lib/frontend/locale/locale.models';
import { type ReactElement } from 'react';

export type MenuRefModel = DropdownRefModel;

export type MenuOptionModel = TranslatableOptionModel & {
  isDivider?: boolean;
};

export type MenuPropsModel<TType extends MenuOptionModel = MenuOptionModel> = Pick<
  DropdownPropsModel,
  'width' | 'isFullWidth' | 'direction'
> &
  Omit<InputPropsModel, 'id'> & {
    anchor(isOpen?: boolean): ReactElement<PressablePropsModel>;
    onToggle?(isOpen?: boolean): void;
    options: Array<TType>;
    renderOption?(option: TType): TranslatableTextModel;
    title?: TranslatableTextModel;
  };
