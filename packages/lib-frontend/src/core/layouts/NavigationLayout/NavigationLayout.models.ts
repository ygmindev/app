import { type TranslatableOptionModel, type ValuePropsModel } from '#lib-frontend/core/core.models';
import { type LayoutPropsModel } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles.models';

export type NavigationLayoutPropsModel<TType extends TranslatableOptionModel> = LayoutPropsModel &
  NavigationPropsModel<TType>;

export type NavigationPropsModel<TType extends TranslatableOptionModel> = {
  isHorizontal?: boolean;
  options: Array<TType>;
  title?: string;
} & ValuePropsModel<string>;
