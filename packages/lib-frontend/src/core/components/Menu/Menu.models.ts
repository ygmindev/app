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

export type MenuOptionModel<TType extends string = string> = TranslatableOptionModel<TType> & {
  subOptions?: Array<MenuOptionModel>;
};

export interface MenuPropsModel<TType extends string = string>
  extends Pick<DropdownPropsModel, 'width' | 'maxWidth' | 'isFullWidth' | 'onClose' | 'direction'>,
    Omit<StringFieldPropsModel, 'id'>,
    RefPropsModel<MenuRefModel> {
  anchor(isOpen?: boolean): ReactElement<PressablePropsModel>;
  isSearchable?: boolean;
  options: Array<MenuOptionModel<TType>>;
  renderOption?(option: TranslatableOptionModel): TranslatableTextModel;
  topElement?: ReactNode;
}
