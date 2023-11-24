import { type ReactElement, useEffect, useState } from 'react';

import { Button } from '#lib-frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '#lib-frontend/core/components/Button/Button.constants';
import { SelectField } from '#lib-frontend/core/components/SelectField/SelectField';
import { Slider } from '#lib-frontend/core/components/Slider/Slider';
import { Text } from '#lib-frontend/core/components/Text/Text';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type LFCPropsModel } from '#lib-frontend/core/core.models';
import { NumberField } from '#lib-frontend/data/components/NumberField/NumberField';
import { NUMBER_RANGE_TYPE } from '#lib-frontend/data/components/NumberRangeField/NumberRangeField.constants';
import {
  type NumberRangeFieldPropsModel,
  type NumberRangeTypeModel,
} from '#lib-frontend/data/components/NumberRangeField/NumberRangeField.models';
import { unitOptions } from '#lib-frontend/data/components/ScaledNumberField/ScaledNumberField';
import { TEXT_FIELD_KEYBOARD } from '#lib-frontend/data/components/TextField/TextField.constants';
import {
  AMOUNT_UNIT,
  DATA,
  NUMBER_UNIT_TYPE,
  RELATIVE_DATE_UNIT,
} from '#lib-frontend/data/data.constants';
import { type NumberUnitModel } from '#lib-frontend/data/data.models';
import { useFormatter } from '#lib-frontend/data/hooks/useFormatter/useFormatter';
import { useValueScaled } from '#lib-frontend/data/hooks/useValueScaled/useValueScaled';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useTheme } from '#lib-frontend/style/hooks/useTheme/useTheme';
import { THEME_SIZE } from '#lib-frontend/style/style.constants';
import { type NumberRangeModel } from '#lib-shared/data/resources/NumberRange/NumberRange.models';

export const NumberRangeField = <TType extends NumberUnitModel>({
  defaultUnit,
  defaultValue,
  error,
  label,
  onChange,
  rangeType,
  type = NUMBER_UNIT_TYPE.AMOUNT,
  value,
  ...props
}: LFCPropsModel<NumberRangeFieldPropsModel<TType>>): ReactElement<
  LFCPropsModel<NumberRangeFieldPropsModel<TType>>
> => {
  const theme = useTheme();
  const { t } = useTranslation([DATA]);
  const { wrapperProps } = useLayoutStyles({ props });
  const [rangeTypeState, rangeTypeSet] = useState<NumberRangeTypeModel>(
    rangeType ?? NUMBER_RANGE_TYPE.EXACT,
  );
  const isRange = rangeTypeState === NUMBER_RANGE_TYPE.RANGE;
  // TODO: adjust default range
  const [range, rangeSet] = useState<[number, number]>([0, 1e3]);
  const { format } = useFormatter();

  const unitOptionsF = unitOptions(type);

  const { unit, valueControlled, valueControlledSet, valueScaled } = useValueScaled({
    defaultUnit,
    defaultValue,
    onChange,
    value,
  });

  useEffect(() => {
    !unit && handleChange({ unit: unitOptionsF[0].id as TType });
  }, []);

  const handleBlur = (): void => {
    isRange &&
      valueScaled?.min &&
      valueScaled?.max &&
      valueScaled.min > valueScaled.max &&
      handleChange({ max: valueScaled.min, min: valueScaled.max });
  };

  const handleChange = ({
    max,
    min,
    rangeType: rangeTypeF,
    unit: unitF,
  }: NumberRangeModel & { unit?: TType } & {
    rangeType?: NumberRangeTypeModel;
  }): void => {
    const rangeTypeFF = rangeTypeF ?? rangeTypeState;
    const unitFF = unitF ?? unit;
    const { lowerF, upperF } = (() => {
      switch (unitFF) {
        case RELATIVE_DATE_UNIT.DAY:
          return { lowerF: 0, upperF: 365 };
        case RELATIVE_DATE_UNIT.WEEK:
          return { lowerF: 0, upperF: 52 };
        case RELATIVE_DATE_UNIT.MONTH:
          return { lowerF: 0, upperF: 18 };
        case RELATIVE_DATE_UNIT.YEAR:
          return { lowerF: 0, upperF: 1e2 };
        case AMOUNT_UNIT.BILLION:
          return { lowerF: 0, upperF: 1e1 };
        default:
          return { lowerF: 10, upperF: 1e3 };
      }
    })();
    rangeSet([lowerF, upperF]);
    rangeTypeSet(rangeTypeFF);
    valueControlledSet(
      {
        max: max ?? (max === null ? undefined : valueControlled?.max),
        min: min ?? (min === null ? undefined : valueControlled?.min),
      },
      unitFF,
    );
  };

  return (
    <Wrapper
      {...wrapperProps}
      s={THEME_SIZE.SMALL}>
      <Text>{t('core:measureIn')}</Text>

      <SelectField<TType>
        isHorizontal
        onChange={(v) => handleChange({ unit: v })}
        options={unitOptionsF}
        value={unit}
      />

      {label && <Text>{t(label)}</Text>}

      <Wrapper isRowAlign>
        <NumberField
          error={error}
          flex
          keyboard={TEXT_FIELD_KEYBOARD.NUMBER_POSITIVE}
          label={isRange ? t('data:min', { value: label }) : label}
          onBlur={handleBlur}
          onChange={(v) => handleChange({ min: v ?? null })}
          placeholder={t('core:any')}
          rightElement={<Text color={theme.color.border}>{unit}</Text>}
          value={valueScaled?.min}
        />

        {isRange && (
          <NumberField
            error={error}
            flex
            keyboard={TEXT_FIELD_KEYBOARD.NUMBER_POSITIVE}
            label={t('data:max', { value: label })}
            onBlur={handleBlur}
            onChange={(v) => handleChange({ max: v ?? null })}
            placeholder={t('core:any')}
            rightElement={<Text color={theme.color.border}>{unit}</Text>}
            value={valueScaled?.max}
          />
        )}
      </Wrapper>

      <Slider
        formatter={(v) => format(v, { isScale: false, unit })}
        isRange={isRange}
        lower={range[0]}
        onChange={handleChange}
        upper={range[1]}
        value={{ max: valueScaled?.max, min: valueScaled?.min }}
      />

      {!rangeType && (
        <Button
          onPress={() =>
            handleChange({ rangeType: isRange ? NUMBER_RANGE_TYPE.EXACT : NUMBER_RANGE_TYPE.RANGE })
          }
          type={BUTTON_TYPE.INVISIBLE}>
          {isRange ? t('data:exactMessage') : t('data:rangeMessage')}
        </Button>
      )}
    </Wrapper>
  );
};