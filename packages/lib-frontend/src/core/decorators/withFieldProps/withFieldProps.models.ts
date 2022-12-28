import type { IconPropsModel } from '@lib/frontend/core/components/Icon/Icon.models';
import type { TranslatableTextModel } from '@lib/frontend/locale/locale.models';

export interface WithFieldPropsModel<TType extends string = string>
  extends Pick<IconPropsModel, 'icon'> {
  defaultValue?: TType;
  error?: boolean | TranslatableTextModel;
  isAutoFocus?: boolean;
  isDisabled?: boolean;
  label?: TranslatableTextModel;
  onChange?(value: TType): void;
  value?: TType;
}
