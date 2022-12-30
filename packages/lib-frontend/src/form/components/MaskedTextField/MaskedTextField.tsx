import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import { _MaskedTextField } from '@lib/frontend/form/components/MaskedTextField/_MaskedTextField';
import type { _MaskedTextFieldPropsModel } from '@lib/frontend/form/components/MaskedTextField/_MaskedTextField.models';
import type { MaskedTextFieldPropsModel } from '@lib/frontend/form/components/MaskedTextField/MaskedTextField.models';

export const MaskedTextField = composeComponent<
  MaskedTextFieldPropsModel,
  _MaskedTextFieldPropsModel
>({
  getComponent: () => _MaskedTextField,
});
