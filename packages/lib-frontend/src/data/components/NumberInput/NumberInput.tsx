import toNumber from 'lodash/toNumber';
import toString from 'lodash/toString';
import { forwardRef } from 'react';

import { type RLFCModel } from '@lib/frontend/core/core.models';
import {
  type NumberInputPropsModel,
  type NumberInputRefModel,
} from '@lib/frontend/data/components/NumberInput/NumberInput.models';
import { TextInput } from '@lib/frontend/data/components/TextInput/TextInput';
import { useValueControlled } from '@lib/frontend/data/hooks/useValueControlled/useValueControlled';
import { isNumeric } from '@lib/shared/core/utils/isNumeric/isNumeric';

export const NumberInput: RLFCModel<NumberInputRefModel, NumberInputPropsModel> = forwardRef(
  ({ defaultValue, onChange, value, ...props }, ref) => {
    const { valueControlled, valueControlledSet } = useValueControlled({
      defaultValue,
      onChange,
      value,
    });
    return (
      <TextInput
        {...props}
        onChange={(v) => valueControlledSet(isNumeric(v) ? toNumber(v) : defaultValue)}
        ref={ref}
        value={toString(valueControlled)}
      />
    );
  },
);
