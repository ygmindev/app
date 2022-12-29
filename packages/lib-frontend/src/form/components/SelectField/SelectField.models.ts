import type { MenuPropsModel } from '@lib/frontend/core/components/Menu/Menu.models';
import type { FieldPropsModel, OptionModel } from '@lib/frontend/core/core.models';
import type { TextFieldPropsModel } from '@lib/frontend/form/components/TextField/TextField.models';
import type { TranslatableTextModel } from '@lib/frontend/locale/locale.models';
import type { TestIdPropsModel } from '@lib/frontend/test/test.models';

export interface SelectFieldPropsModel
  extends Pick<MenuPropsModel, 'renderOption'>,
    Pick<TextFieldPropsModel, 'icon' | 'label' | 'error' | 'width' | 'isAutoFocus' | 'onSubmit'>,
    FieldPropsModel,
    TestIdPropsModel {
  options: Array<OptionModel>;
  renderValue?(option: OptionModel): TranslatableTextModel;
}
