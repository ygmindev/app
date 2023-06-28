import { composeComponent } from '#lib-frontend/core/utils/composeComponent/composeComponent';
import { _MaskedTextField } from '#lib-frontend/form/components/MaskedTextField/_MaskedTextField';
import type { _MaskedTextFieldPropsModel } from '#lib-frontend/form/components/MaskedTextField/_MaskedTextField.models';
import type { MaskedTextFieldPropsModel } from '#lib-frontend/form/components/MaskedTextField/MaskedTextField.models';
import { variableName } from '#lib-shared/core/utils/variableName/variableName';

export const MaskedTextField = composeComponent<
  MaskedTextFieldPropsModel,
  _MaskedTextFieldPropsModel
>({
  Component: _MaskedTextField,
});

process.env.APP_IS_DEBUG && (MaskedTextField.displayName = variableName({ MaskedTextField }));
