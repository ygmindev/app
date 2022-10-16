import type { WithIconPropsModel } from '@lib/frontend/core/decorators/withIconProps/withIconProps.models';
import type { TranslationTextModel } from '@lib/frontend/locale/locale.models';

export interface WithFieldPropsModel<TType extends string = string> extends WithIconPropsModel {
  defaultValue?: TType;
  error?: boolean | TranslationTextModel;
  isAutoFocus?: boolean;
  isDisabled?: boolean;
  label?: TranslationTextModel;
  onChange?(value: TType): void;
  value?: TType;
}
