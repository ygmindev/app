import type { WithIconModel } from '@lib/frontend/core/components/Icon/Icon.models';
import type { TranslationTextModel } from '@lib/frontend/locale/locale.models';

export interface WithFieldPropsModel<TType extends string = string> extends WithIconModel {
  defaultValue?: TType;
  error?: boolean | TranslationTextModel;
  isAutoFocus?: boolean;
  isDisabled?: boolean;
  label?: TranslationTextModel;
  onChange?(value: TType): void;
  value?: TType;
}
