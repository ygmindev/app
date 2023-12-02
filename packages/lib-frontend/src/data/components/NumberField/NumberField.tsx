import toNumber from 'lodash/toNumber';
import toString from 'lodash/toString';
import { forwardRef } from 'react';

import { type RLFCModel } from '#lib-frontend/core/core.models';
import {
  type NumberFieldPropsModel,
  type NumberFieldRefModel,
} from '#lib-frontend/data/components/NumberField/NumberField.models';
import { TextField } from '#lib-frontend/data/components/TextField/TextField';
import { useValueControlled } from '#lib-frontend/data/hooks/useValueControlled/useValueControlled';
import { isNumeric } from '#lib-shared/core/utils/isNumeric/isNumeric';

export const NumberField: RLFCModel<NumberFieldRefModel, NumberFieldPropsModel> = forwardRef(
  ({ defaultValue, onChange, value, ...props }, ref) => {
    const { valueControlled, valueControlledSet } = useValueControlled({
      defaultValue,
      onChange,
      value,
    });
    return (
      <TextField
        {...props}
        onChange={(v) => valueControlledSet(isNumeric(v) ? toNumber(v) : defaultValue)}
        ref={ref}
        value={toString(valueControlled)}
      />
    );
  },
);
