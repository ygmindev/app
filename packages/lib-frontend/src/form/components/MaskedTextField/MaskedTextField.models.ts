import type { _MaskedTextFieldPropsModel } from '@lib/frontend/form/components/MaskedTextField/_MaskedTextField.models';
import type { TextFieldPropsModel } from '@lib/frontend/form/components/TextField/TextField.models';

export interface MaskedTextFieldPropsModel
  extends Pick<_MaskedTextFieldPropsModel, 'mask'>,
    Omit<TextFieldPropsModel, 'defaultValue'> {}
