import { forwardRef } from 'react';

import { type RLFCModel } from '@lib/frontend/core/core.models';
import { TextField } from '@lib/frontend/data/components/TextField/TextField';
import { TEXT_FIELD_KEYBOARD } from '@lib/frontend/data/components/TextField/TextField.constants';
import { useValueControlled } from '@lib/frontend/data/hooks/useValueControlled/useValueControlled';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import {
  type PhoneFieldPropsModel,
  type PhoneFieldRefModel,
} from '@lib/frontend/user/components/PhoneField/PhoneField.models';

export const PhoneField: RLFCModel<PhoneFieldRefModel, PhoneFieldPropsModel> = forwardRef(
  ({ defaultValue, onChange, value, ...props }, ref) => {
    const { t } = useTranslation();
    const { valueControlled, valueControlledSet } = useValueControlled({
      defaultValue,
      onChange,
      value,
    });
    return (
      <TextField
        {...props}
        autoComplete="cell"
        icon="phone"
        keyboard={TEXT_FIELD_KEYBOARD.NUMBER_POSITIVE}
        label={t('user:phone')}
        onChange={valueControlledSet}
        ref={ref}
        value={valueControlled}
      />
    );
  },
);
