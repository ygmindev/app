import { type ReactElement } from 'react';

import { type LFCPropsModel, type TranslatableOptionModel } from '@lib/frontend/core/core.models';
import { DropdownInput } from '@lib/frontend/data/components/DropdownInput/DropdownInput';
import { InputGroup } from '@lib/frontend/data/components/InputGroup/InputGroup';
import { NumberInput } from '@lib/frontend/data/components/NumberInput/NumberInput';
import {
  AMOUNT_UNIT_OPTIONS,
  RATE_UNIT_OPTIONS,
  RELATIVE_DATE_UNIT_OPTIONS,
} from '@lib/frontend/data/components/ScaledNumberInput/ScaledNumberInput.constants';
import { type ScaledNumberInputPropsModel } from '@lib/frontend/data/components/ScaledNumberInput/ScaledNumberInput.models';
import { NUMBER_UNIT_TYPE } from '@lib/frontend/data/data.constants';
import { type NumberUnitModel, type NumberUnitTypeModel } from '@lib/frontend/data/data.models';
import { useValueScaled } from '@lib/frontend/data/hooks/useValueScaled/useValueScaled';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';

export const unitOptions = <TType extends NumberUnitModel>(
  type: NumberUnitTypeModel,
): Array<TranslatableOptionModel<TType>> => {
  switch (type) {
    case NUMBER_UNIT_TYPE.AMOUNT:
      return AMOUNT_UNIT_OPTIONS as Array<TranslatableOptionModel<TType>>;
    case NUMBER_UNIT_TYPE.RATE:
      return RATE_UNIT_OPTIONS as Array<TranslatableOptionModel<TType>>;
    case NUMBER_UNIT_TYPE.RELATIVE_DATE:
      return RELATIVE_DATE_UNIT_OPTIONS as Array<TranslatableOptionModel<TType>>;
    default:
      return [];
  }
};

export const ScaledNumberInput = <TType extends NumberUnitModel>({
  defaultUnit,
  defaultValue,
  error,
  keyboard,
  label,
  onChange,
  type = NUMBER_UNIT_TYPE.AMOUNT,
  value,
  ...props
}: LFCPropsModel<ScaledNumberInputPropsModel<TType>>): ReactElement<
  LFCPropsModel<ScaledNumberInputPropsModel<TType>>
> => {
  const { t } = useTranslation();
  const { wrapperProps } = useLayoutStyles({ props });
  const { unit, unitSet, valueControlledSet, valueScaled } = useValueScaled({
    defaultUnit,
    defaultValue,
    onChange,
    value,
  });
  return (
    <InputGroup
      {...wrapperProps}
      fields={[
        {
          element: (
            <NumberInput
              error={error}
              keyboard={keyboard}
              label={label}
              onChange={valueControlledSet}
              value={valueScaled}
            />
          ),
          id: 'value',
        },
        {
          element: (
            <DropdownInput<TType>
              label={t('core:unit')}
              onChange={(v: TType) => {
                unitSet(v);
                valueControlledSet(valueScaled, v);
              }}
              options={unitOptions(type)}
              value={unit}
            />
          ),
          id: 'unit',
        },
      ]}
    />
  );
};
