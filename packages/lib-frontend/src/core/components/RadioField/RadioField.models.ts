import { type TranslatableOptionModel } from '#lib-frontend/core/core.models';
import { type ValuePropsModel } from '#lib-frontend/data/data.models';
import { type ThemeColorModel } from '#lib-frontend/style/style.models';

export type RadioFieldPropsModel<TType extends string = string> = ValuePropsModel<TType> & {
  color?: ThemeColorModel;
  isHorizontal?: boolean;
  options: Array<TranslatableOptionModel<TType>>;
};
