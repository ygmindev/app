import type { DropdownPropsModel } from '@lib/frontend/core/components/Dropdown/Dropdown.models';
import type { PressablePropsModel } from '@lib/frontend/core/components/Pressable/Pressable.models';
import type {
  FieldPropsModel,
  ForwardedRefPropsModel,
  OptionModel,
} from '@lib/frontend/core/core.models';
import type { TranslatableTextModel } from '@lib/frontend/locale/locale.models';
import type { ReactElement, ReactNode } from 'react';

export interface MenuRefModel {
  setIsOpen(isOpen?: boolean): void;
}

export interface MenuPropsModel
  extends Pick<DropdownPropsModel, 'isFullWidth' | 'onClose'>,
    Omit<FieldPropsModel, 'id'>,
    ForwardedRefPropsModel<MenuRefModel> {
  anchor(isOpen?: boolean): ReactElement<PressablePropsModel>;
  isSearchable?: boolean;
  options: Array<OptionModel>;
  renderOption?(option: OptionModel): TranslatableTextModel;
  topElement?: ReactNode;
}
