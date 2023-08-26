import { type TranslatableOptionModel, type ValuePropsModel } from '#lib-frontend/core/core.models';

export type NavigationLayoutPropsModel<TType extends TranslatableOptionModel> =
  NavigationPropsModel<TType>;

export type NavigationPropsModel<TType extends TranslatableOptionModel> = {
  isHorizontal?: boolean;
  options: Array<TType>;
  title?: string;
} & ValuePropsModel<string>;
