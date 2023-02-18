import type { LayoutPropsModel } from '@lib/frontend/core/core.models';
import type { TranslatableOptionModel } from '@lib/frontend/locale/locale.models';
import type { ReactNode } from 'react';

export interface NavigationLayoutPropsModel<TType extends TranslatableOptionModel>
  extends LayoutPropsModel,
    NavigationPropsModel<TType> {
  barElement?: ReactNode;
}

export interface NavigationPropsModel<TType extends TranslatableOptionModel> {
  options?: Array<TType>;
  value?: string;
}
