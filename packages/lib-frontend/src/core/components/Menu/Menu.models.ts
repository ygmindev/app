import type { DropdownPropsModel } from '@lib/frontend/core/components/Dropdown/Dropdown.models';
import type { PressablePropsModel } from '@lib/frontend/core/components/Pressable/Pressable.models';
import type { FieldPropsModel, RefPropsModel } from '@lib/frontend/core/core.models';
import type {
  TranslatableOptionModel,
  TranslatableTextModel,
} from '@lib/frontend/locale/locale.models';
import type { CallableModel } from '@lib/shared/core/core.models';
import type { ReactElement, ReactNode } from 'react';

export interface MenuRefModel {
  isOpen: CallableModel<boolean>;
  toggle(isOpen?: boolean): void;
}

export interface MenuOptionModel extends TranslatableOptionModel {
  subOptions?: Array<MenuOptionModel>;
}

export interface MenuPropsModel
  extends Pick<DropdownPropsModel, 'isFullWidth' | 'onClose' | 'direction'>,
    Omit<FieldPropsModel, 'id'>,
    RefPropsModel<MenuRefModel> {
  anchor(isOpen?: boolean): ReactElement<PressablePropsModel>;
  isSearchable?: boolean;
  options: Array<MenuOptionModel>;
  renderOption?(option: TranslatableOptionModel): TranslatableTextModel;
  topElement?: ReactNode;
}
