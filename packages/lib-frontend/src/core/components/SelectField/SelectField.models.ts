import type { MenuPropsModel } from '@lib/frontend/core/components/Menu/Menu.models';
import type { PressPropsModel } from '@lib/frontend/core/components/Press/Press.models';
import type { TextFieldPropsModel } from '@lib/frontend/core/components/TextField/TextField.models';
import type { OptionModel } from '@lib/frontend/core/core.models';
import type { WithFieldPropsModel } from '@lib/frontend/core/decorators/withFieldProps/withFieldProps.models';
import type { TranslationTextModel } from '@lib/frontend/locale/locale.models';
import type { ThemeColorModel } from '@lib/frontend/styling/utils/theme/theme.models';
import type { WithTestIdModel } from '@lib/frontend/testing/testing.models';

export interface SelectOptionModel
  extends OptionModel,
    Pick<PressPropsModel, 'onPress' | 'isDisabled' | 'confirmMessage'> {
  color?: ThemeColorModel;
}

export interface SelectWithFieldPropsModel
  extends Pick<MenuPropsModel, 'renderOption'>,
    Pick<
      TextFieldPropsModel,
      'icon' | 'label' | 'error' | 'left' | 'width' | 'isAutoFocus' | 'onSubmit'
    >,
    WithFieldPropsModel,
    WithTestIdModel {
  options: Array<SelectOptionModel>;
  renderValue?(option: SelectOptionModel): TranslationTextModel;
}
