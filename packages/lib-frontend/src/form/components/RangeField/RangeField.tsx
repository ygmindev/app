import { type ReactElement } from 'react';

import { RadioField } from '#lib-frontend/core/components/RadioField/RadioField';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '#lib-frontend/core/core.models';
import { type RangeFieldPropsModel } from '#lib-frontend/form/components/RangeField/RangeField.models';
import { TextField } from '#lib-frontend/form/components/TextField/TextField';
import { useControlledValue } from '#lib-frontend/form/hooks/useControlledValue/useControlledValue';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { FIELD_TYPE, FIELD_TYPE_MORE } from '#lib-shared/form/form.constants';

export const RangeField: LFCModel<RangeFieldPropsModel> = ({ label, testID, type, ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const { valueControlled: range, valueControlledSet: rangeSet } = useControlledValue<
    'range' | 'exact'
  >({ defaultValue: 'exact' });

  const getFieldElement = (): ReactElement | null => {
    switch (type) {
      case FIELD_TYPE.NUMBER:
      case FIELD_TYPE_MORE.NUMBER_POSITIVE:
        return (
          <TextField
            keyboard={type}
            label={label}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Wrapper
      {...wrapperProps}
      border
      round>
      <RadioField
        isHorizontal
        onChange={rangeSet}
        options={[
          { icon: 'target', id: 'exact', label: ({ t }) => t('core:exact') },
          { icon: 'range', id: 'range', label: ({ t }) => t('core:range') },
        ]}
        value={range}
      />

      {range === 'range' ? null : getFieldElement()}
    </Wrapper>
  );
};
