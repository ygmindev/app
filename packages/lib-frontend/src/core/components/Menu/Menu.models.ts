import type { DropdownPropsModel } from '@lib/frontend/core/components/Dropdown/Dropdown.models';
import type { PressPropsModel } from '@lib/frontend/core/components/Press/Press.models';
import type { WithFieldPropsModel } from '@lib/frontend/core/decorators/withFieldProps/withFieldProps.models';
import type { WithForwardedRefPropsModel } from '@lib/frontend/core/decorators/withForwardRefProps/withForwardRefProps.models';
import type { SelectOptionModel } from '@lib/frontend/form/components/SelectField/SelectField.models';
import type { TranslationTextModel } from '@lib/frontend/locale/locale.models';
import type { WithStyleParamsModel } from '@lib/frontend/styling/decorators/withStyle/withStyle.models';
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
    WithStyleParamsModel {
  anchor: ReactElement<PressPropsModel> | ((isOpen: boolean) => ReactElement<PressPropsModel>);
  isCenter?: boolean;
  isSearchable?: boolean;
  options: Array<MenuOptionModel>;
  renderOption?(option: SelectOptionModel): TranslationTextModel;
  topElement?: ReactNode;
}
