import { type TranslatableOptionModel } from '#lib-frontend/core/core.models';
import { type StringFieldPropsModel } from '#lib-frontend/form/form.models';
import { type LayoutPropsModel } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles.models';
import { type ThemeColorModel } from '#lib-frontend/style/style.models';

export type RadioFieldPropsModel<TType extends string = string> = LayoutPropsModel &
  StringFieldPropsModel<TType> & {
    color?: ThemeColorModel;
    isHorizontal?: boolean;
    options: Array<TranslatableOptionModel<TType>>;
  };
