import { type ReactElement } from 'react';

import { type LFCPropsModel, type TranslatableOptionModel } from '#lib-frontend/core/core.models';
import { DropdownField } from '#lib-frontend/data/components/DropdownField/DropdownField';
import { FieldGroup } from '#lib-frontend/data/components/FieldGroup/FieldGroup';
import { NumberField } from '#lib-frontend/data/components/NumberField/NumberField';
import {
  AMOUNT_UNIT_OPTIONS,
  RATE_UNIT_OPTIONS,
  RELATIVE_DATE_UNIT_OPTIONS,
} from '#lib-frontend/data/components/ScaledNumberField/ScaledNumberField.constants';
import { type ScaledNumberFieldPropsModel } from '#lib-frontend/data/components/ScaledNumberField/ScaledNumberField.models';
import { NUMBER_UNIT_TYPE } from '#lib-frontend/data/data.constants';
import { type NumberUnitModel, type NumberUnitTypeModel } from '#lib-frontend/data/data.models';
import { useValueScaled } from '#lib-frontend/data/hooks/useValueScaled/useValueScaled';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';

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

export const ScaledNumberField = <TType extends NumberUnitModel>({
  defaultUnit,
  defaultValue,
  error,
  keyboard,
  label,
  onChange,
  type = NUMBER_UNIT_TYPE.AMOUNT,
  value,
  ...props
}: LFCPropsModel<ScaledNumberFieldPropsModel<TType>>): ReactElement<
  LFCPropsModel<ScaledNumberFieldPropsModel<TType>>
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
    <FieldGroup
      {...wrapperProps}
      fields={[
        {
          element: (
            <NumberField
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
            <DropdownField<TType>
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
