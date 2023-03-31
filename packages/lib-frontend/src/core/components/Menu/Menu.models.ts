import type { DropdownPropsModel } from '@lib/frontend/core/components/Dropdown/Dropdown.models';
import type { PressablePropsModel } from '@lib/frontend/core/components/Pressable/Pressable.models';
import type { RefPropsModel, TranslatableOptionModel } from '@lib/frontend/core/core.models';
import type { StringFieldPropsModel } from '@lib/frontend/form/form.models';
import type { TranslatableTextModel } from '@lib/frontend/locale/locale.models';
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
  extends Pick<DropdownPropsModel, 'width' | 'maxWidth' | 'isFullWidth' | 'onClose' | 'direction'>,
    Omit<StringFieldPropsModel, 'id'>,
    RefPropsModel<MenuRefModel> {
  anchor(isOpen?: boolean): ReactElement<PressablePropsModel>;
  isSearchable?: boolean;
  options: Array<MenuOptionModel>;
  renderOption?(option: TranslatableOptionModel): TranslatableTextModel;
  topElement?: ReactNode;
}
