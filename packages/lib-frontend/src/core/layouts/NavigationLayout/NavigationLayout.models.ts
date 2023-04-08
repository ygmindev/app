import type {
  LayoutPropsModel,
  TranslatableOptionModel,
  ValuePropsModel,
} from '@lib/frontend/core/core.models';

export interface NavigationLayoutPropsModel<TType extends TranslatableOptionModel>
  extends LayoutPropsModel,
    NavigationPropsModel<TType> {}

export interface NavigationPropsModel<TType extends TranslatableOptionModel>
  extends ValuePropsModel<string> {
  isHorizontal?: boolean;
  options: Array<TType>;
  title?: string;
}
