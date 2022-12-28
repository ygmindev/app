import type { DropdownPropsModel } from '@lib/frontend/core/components/Dropdown/Dropdown.models';
import type { Pressable } from '@lib/frontend/core/components/Pressable/Pressable.models';
import type { WithFieldPropsModel } from '@lib/frontend/core/decorators/withFieldProps/withFieldProps.models';
import type { WithForwardedRefPropsModel } from '@lib/frontend/core/decorators/withForwardRefProps/withForwardRefProps.models';
import type { SelectOptionModel } from '@lib/frontend/form/components/SelectField/SelectField.models';
import type { TranslatableTextModel } from '@lib/frontend/locale/locale.models';
import type { WithStyleModel } from '@lib/frontend/style/decorators/withStyle/withStyle.models';
import type { WithIdModel } from '@lib/shared/core/decorators/withId/withId.models';
import type { ReactElement, ReactNode } from 'react';

export interface DividerOptionModel extends WithIdModel {
  isDivider: true;
}

export type MenuOptionModel = SelectOptionModel | DividerOptionModel;

export interface MenuRefModel {
  setIsOpen(isOpen: boolean): void;
}

export interface MenuPropsModel
  extends Pick<DropdownPropsModel, 'isFullWidth' | 'onClose'>,
    Omit<WithFieldPropsModel, 'id'>,
    WithForwardedRefPropsModel<MenuRefModel>,
    WithStyleModel {
  anchor: ReactElement<Pressable> | ((isOpen: boolean) => ReactElement<Pressable>);
  isCenter?: boolean;
  isSearchable?: boolean;
  options: Array<MenuOptionModel>;
  renderOption?(option: SelectOptionModel): TranslatableTextModel;
  topElement?: ReactNode;
}
