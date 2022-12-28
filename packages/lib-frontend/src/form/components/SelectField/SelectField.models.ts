import type { MenuPropsModel } from '@lib/frontend/core/components/Menu/Menu.models';
import type { Pressable } from '@lib/frontend/core/components/Pressable/Pressable.models';
import type { OptionModel } from '@lib/frontend/core/core.models';
import type { WithFieldPropsModel } from '@lib/frontend/core/decorators/withFieldProps/withFieldProps.models';
import type { TextFieldPropsModel } from '@lib/frontend/form/components/TextField/TextField.models';
import type { TranslatableTextModel } from '@lib/frontend/locale/locale.models';
import type { ThemeColorModel } from '@lib/frontend/style/style.models';
import type { WithTestIdModel } from '@lib/frontend/test/test.models';

export interface SelectOptionModel
  extends OptionModel,
    Pick<Pressable, 'onPress' | 'isDisabled' | 'confirmMessage'> {
  color?: ThemeColorModel;
}

export interface SelectFieldPropsModel
  extends Pick<MenuPropsModel, 'renderOption'>,
    Pick<TextFieldPropsModel, 'icon' | 'label' | 'error' | 'width' | 'isAutoFocus' | 'onSubmit'>,
    WithFieldPropsModel,
    WithTestIdModel {
  options: Array<SelectOptionModel>;
  renderValue?(option: SelectOptionModel): TranslatableTextModel;
}
