import type { LayoutPropsModel, ValuePropsModel } from '@lib/frontend/core/core.models';
import type { TranslatableOptionModel } from '@lib/frontend/core/core.models';
import type { ReactNode } from 'react';

export interface NavigationLayoutPropsModel<TType extends TranslatableOptionModel>
  extends LayoutPropsModel,
    NavigationPropsModel<TType> {
  barElement?: ReactNode;
}

export interface NavigationPropsModel<TType extends TranslatableOptionModel>
  extends ValuePropsModel<string> {
  options: Array<TType>;
}
