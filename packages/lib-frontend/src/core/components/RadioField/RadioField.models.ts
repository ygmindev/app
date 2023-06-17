import type { TranslatableOptionModel } from '#lib-frontend/core/core.models';
import type { StringFieldPropsModel } from '#lib-frontend/form/form.models';
import type { ThemeColorModel } from '#lib-frontend/style/style.models';

export type RadioFieldPropsModel<TType extends string = string> = {
  color?: ThemeColorModel;
  isHorizontal?: boolean;
  options: Array<TranslatableOptionModel<TType>>;
} & StringFieldPropsModel<TType>;
