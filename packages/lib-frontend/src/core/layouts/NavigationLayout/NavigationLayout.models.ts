import {
  type ChildrenPropsModel,
  type TranslatableOptionModel,
} from '@lib/frontend/core/core.models';
import { type ValuePropsModel } from '@lib/frontend/data/data.models';

export type NavigationLayoutPropsModel<TType extends TranslatableOptionModel> =
  NavigationPropsModel<TType> & ChildrenPropsModel;

export type NavigationPropsModel<TType extends TranslatableOptionModel> = ValuePropsModel & {
  isHorizontal?: boolean;
  options: Array<TType>;
  title?: string;
};
