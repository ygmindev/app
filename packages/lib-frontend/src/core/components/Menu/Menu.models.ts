import { type ReactElement } from 'react';

import {
  type DropdownPropsModel,
  type DropdownRefModel,
} from '#lib-frontend/core/components/Dropdown/Dropdown.models';
import { type PressablePropsModel } from '#lib-frontend/core/components/Pressable/Pressable.models';
import { type TranslatableOptionModel } from '#lib-frontend/core/core.models';
import { type FieldPropsModel } from '#lib-frontend/data/data.models';
import { type TranslatableTextModel } from '#lib-frontend/locale/locale.models';

export type MenuRefModel = DropdownRefModel;

export type MenuOptionModel = TranslatableOptionModel & {
  isDivider?: boolean;
};

export type MenuPropsModel<TType extends MenuOptionModel = MenuOptionModel> = Pick<
  DropdownPropsModel,
  'width' | 'isFullWidth' | 'direction'
> &
  Omit<FieldPropsModel, 'id'> & {
    anchor(isOpen?: boolean): ReactElement<PressablePropsModel>;
    options: Array<TType>;
    renderOption?(option: TType): TranslatableTextModel;
    title?: TranslatableTextModel;
  };
