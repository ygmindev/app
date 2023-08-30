import toNumber from 'lodash/toNumber';
import toString from 'lodash/toString';
import { useState } from 'react';

import { type LFCModel } from '#lib-frontend/core/core.models';
import { type NumberFieldPropsModel } from '#lib-frontend/data/components/NumberField/NumberField.models';
import { TextField } from '#lib-frontend/data/components/TextField/TextField';
import { useValueControlled } from '#lib-frontend/data/hooks/useValueControlled/useValueControlled';

export const NumberField: LFCModel<NumberFieldPropsModel> = ({
  defaultValue,
  onBlur,
  onChange,
  value,
  ...props
}) => {
  const { valueControlled, valueControlledSet } = useValueControlled({
    defaultValue,
    onChange,
    value,
  });
  const [stringValue, stringValueSet] = useState<string | undefined>(toString(valueControlled));
  const handleChange = (): void => {
    stringValue && valueControlledSet(toNumber(stringValue));
  };

  return (
    <TextField
      {...props}
      onBlur={() => {
        onBlur && onBlur();
        handleChange();
      }}
      onChange={stringValueSet}
      value={stringValue}
    />
  );
};
