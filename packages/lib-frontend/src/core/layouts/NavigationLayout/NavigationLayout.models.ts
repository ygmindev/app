import type { LayoutPropsModel, OptionModel } from '@lib/frontend/core/core.models';

export interface NavigationLayoutPropsModel<TType extends OptionModel>
  extends LayoutPropsModel,
    NavigationPropsModel<TType> {}

export interface NavigationPropsModel<TType extends OptionModel> {
  options?: Array<TType>;
  value?: string;
}
