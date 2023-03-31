import type { MenuPropsModel } from '@lib/frontend/core/components/Menu/Menu.models';
import type { TranslatableOptionModel } from '@lib/frontend/core/core.models';
import type { TextFieldPropsModel } from '@lib/frontend/form/components/TextField/TextField.models';
import type { StringFieldPropsModel } from '@lib/frontend/form/form.models';
import type { TranslatableTextModel } from '@lib/frontend/locale/locale.models';

export interface SelectFieldPropsModel
  extends Pick<MenuPropsModel, 'options' | 'renderOption'>,
    Pick<TextFieldPropsModel, 'icon' | 'label' | 'error' | 'width' | 'isAutoFocus' | 'onSubmit'>,
    Omit<StringFieldPropsModel, 'label' | 'error'> {
  renderValue?(option: TranslatableOptionModel): TranslatableTextModel;
}
