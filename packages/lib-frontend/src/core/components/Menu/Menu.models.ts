import type {
  DropdownPropsModel,
  DropdownRefModel,
} from '@lib/frontend/core/components/Dropdown/Dropdown.models';
import type { PressablePropsModel } from '@lib/frontend/core/components/Pressable/Pressable.models';
import type { TranslatableOptionModel } from '@lib/frontend/core/core.models';
import type { StringFieldPropsModel } from '@lib/frontend/form/form.models';
import type { TranslatableTextModel } from '@lib/frontend/locale/locale.models';
import type { ReactElement, ReactNode } from 'react';

export interface MenuRefModel extends DropdownRefModel {}

export type MenuOptionModel<TType extends string = string> = TranslatableOptionModel<TType> & {
  subOptions?: Array<MenuOptionModel>;
};

export interface MenuPropsModel<TType extends string = string>
  extends Pick<
      DropdownPropsModel,
      'width' | 'maxWidth' | 'maxHeight' | 'isFullWidth' | 'direction'
    >,
    Omit<StringFieldPropsModel, 'id'> {
  anchor(isOpen?: boolean): ReactElement<PressablePropsModel>;
  options: Array<MenuOptionModel<TType>>;
  renderOption?(option: TranslatableOptionModel): TranslatableTextModel;
  topElement?: ReactNode;
}
