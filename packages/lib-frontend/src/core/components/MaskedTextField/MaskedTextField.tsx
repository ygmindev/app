import { _MaskedTextField } from '@lib/frontend/core/components/MaskedTextField/_MaskedTextField';
import type { MaskedTextFieldPropsModel } from '@lib/frontend/core/components/MaskedTextField/MaskedTextField.models';
import { TextField } from '@lib/frontend/core/components/TextField/TextField';
import type { SFCModel } from '@lib/frontend/core/core.models';

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
