import { type ReactElement } from 'react';

import { type LFCPropsModel, type TranslatableOptionModel } from '#lib-frontend/core/core.models';
import { FieldGroup } from '#lib-frontend/data/components/FieldGroup/FieldGroup';
import { NumberField } from '#lib-frontend/data/components/NumberField/NumberField';
import {
  AMOUNT_UNIT_OPTIONS,
  RATE_UNIT_OPTIONS,
  RELATIVE_DATE_UNIT_OPTIONS,
} from '#lib-frontend/data/components/ScaledNumberField/ScaledNumberField.constants';
import { type ScaledNumberFieldPropsModel } from '#lib-frontend/data/components/ScaledNumberField/ScaledNumberField.models';
import { SelectField } from '#lib-frontend/data/components/SelectField/SelectField';
import { type NumberUnitModel } from '#lib-frontend/data/data.models';
import { useValueControlled } from '#lib-frontend/data/hooks/useValueControlled/useValueControlled';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { SCALED_NUMBER_UNIT } from '#lib-shared/data/resources/ScaledNumber/ScaledNumber.constants';
import { type ScaledNumberUnitModel } from '#lib-shared/data/resources/ScaledNumber/ScaledNumber.models';

export const unitOptions = <TType extends NumberUnitModel>(
  type: ScaledNumberUnitModel,
): Array<TranslatableOptionModel<TType>> => {
  switch (type) {
    case SCALED_NUMBER_UNIT.AMOUNT:
      return AMOUNT_UNIT_OPTIONS as Array<TranslatableOptionModel<TType>>;
    case SCALED_NUMBER_UNIT.RATE:
      return RATE_UNIT_OPTIONS as Array<TranslatableOptionModel<TType>>;
    case SCALED_NUMBER_UNIT.RELATIVE_DATE:
      return RELATIVE_DATE_UNIT_OPTIONS as Array<TranslatableOptionModel<TType>>;
    default:
      return [];
  }
};

export const ScaledNumberField = <TType extends NumberUnitModel>({
  defaultValue,
  error,
  keyboard,
  label,
  onChange,
  type = SCALED_NUMBER_UNIT.AMOUNT,
  value,
  ...props
}: LFCPropsModel<ScaledNumberFieldPropsModel<TType>>): ReactElement<
  LFCPropsModel<ScaledNumberFieldPropsModel<TType>>
> => {
  const { t } = useTranslation();
  const { wrapperProps } = useLayoutStyles({ props });
  const { valueControlled, valueControlledSet } = useValueControlled({
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
              onChange={(v) => valueControlledSet({ ...valueControlled, value: v })}
              value={valueControlled?.value}
            />
          ),
          id: 'value',
        },
        {
          element: (
            <SelectField<TType>
              label={t('core:unit')}
              onChange={(v) => valueControlledSet({ ...valueControlled, unit: v as TType })}
              options={unitOptions(type)}
              value={valueControlled?.unit}
            />
          ),
          id: 'unit',
        },
      ]}
    />
  );
};
