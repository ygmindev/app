import { type TranslatableOptionModel } from '#lib-frontend/core/core.models';
import { type ValuePropsModel } from '#lib-frontend/form/form.models';

export type NavigationLayoutPropsModel<TType extends TranslatableOptionModel> =
  NavigationPropsModel<TType>;

export type NavigationPropsModel<TType extends TranslatableOptionModel> = ValuePropsModel & {
  isHorizontal?: boolean;
  options: Array<TType>;
  title?: string;
};
