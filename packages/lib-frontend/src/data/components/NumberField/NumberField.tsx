import toNumber from 'lodash/toNumber';
import toString from 'lodash/toString';

import { type LFCModel } from '#lib-frontend/core/core.models';
import { type NumberFieldPropsModel } from '#lib-frontend/data/components/NumberField/NumberField.models';
import { TextField } from '#lib-frontend/data/components/TextField/TextField';
import { useValueControlled } from '#lib-frontend/data/hooks/useValueControlled/useValueControlled';
import { isNumeric } from '#lib-shared/core/utils/isNumeric/isNumeric';

export const NumberField: LFCModel<NumberFieldPropsModel> = ({
  defaultValue,
  onChange,
  value,
  ...props
}) => {
  const { valueControlled, valueControlledSet } = useValueControlled({
    defaultValue,
    onChange,
    value,
  });
  return (
    <TextField
      {...props}
      onChange={(v) => valueControlledSet(isNumeric(v) ? toNumber(v) : defaultValue)}
      value={toString(valueControlled)}
    />
  );
};
