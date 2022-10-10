import { _MaskedTextField } from '@lib/frontend/core/components/MaskedTextField/_MaskedTextField';
import type { MaskedTextFieldPropsModel } from '@lib/frontend/core/components/MaskedTextField/MaskedTextField.models';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { TextField } from '@lib/frontend/form/components/TextField/TextField';

export const MaskedTextField: SFCModel<MaskedTextFieldPropsModel> = ({ mask, ...props }) => (
  <TextField
    {...props}
    Component={(inputProps) => (
      <_MaskedTextField
        {...inputProps}
        mask={mask}
      />
    )}
    defaultValue=""
    placeholder={mask}
  />
);
