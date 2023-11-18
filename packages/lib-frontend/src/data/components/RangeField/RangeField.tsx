import { type ReactElement, useEffect, useState } from 'react';

import { Button } from '#lib-frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '#lib-frontend/core/components/Button/Button.constants';
import { RadioField } from '#lib-frontend/core/components/RadioField/RadioField';
import { Slider } from '#lib-frontend/core/components/Slider/Slider';
import { Text } from '#lib-frontend/core/components/Text/Text';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type LFCPropsModel } from '#lib-frontend/core/core.models';
import { NumberField } from '#lib-frontend/data/components/NumberField/NumberField';
import {
  type RangeFieldPropsModel,
  type RangeTypeModel,
} from '#lib-frontend/data/components/RangeField/RangeField.models';
import { RANGE_TYPE } from '#lib-frontend/data/components/RangeField/RangField.constants';
import { unitOptions } from '#lib-frontend/data/components/ScaledNumberField/ScaledNumberField';
import { TEXT_FIELD_KEYBOARD } from '#lib-frontend/data/components/TextField/TextField.constants';
import {
  AMOUNT_UNIT,
  DATA,
  NUMBER_UNIT_TYPE,
  RELATIVE_DATE_UNIT,
} from '#lib-frontend/data/data.constants';
import { type NumberUnitModel, type ScaledRangeModel } from '#lib-frontend/data/data.models';
import { useFormatter } from '#lib-frontend/data/hooks/useFormatter/useFormatter';
import { useValueControlled } from '#lib-frontend/data/hooks/useValueControlled/useValueControlled';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useTheme } from '#lib-frontend/style/hooks/useTheme/useTheme';
import { THEME_SIZE } from '#lib-frontend/style/style.constants';
import { type RangeModel } from '#lib-shared/data/data.models';

export const RangeField = <TType extends NumberUnitModel>({
  defaultValue,
  error,
  label,
  onChange,
  rangeType,
  type = NUMBER_UNIT_TYPE.AMOUNT,
  value,
  ...props
}: LFCPropsModel<RangeFieldPropsModel<TType>>): ReactElement<
  LFCPropsModel<RangeFieldPropsModel<TType>>
> => {
  const theme = useTheme();
  const { t } = useTranslation([DATA]);
  const { wrapperProps } = useLayoutStyles({ props });
  const [rangeTypeState, rangeTypeSet] = useState<RangeTypeModel>(rangeType ?? RANGE_TYPE.EXACT);
  const isRange = rangeTypeState === RANGE_TYPE.RANGE;
  // TODO: adjust range
  const [range, rangeSet] = useState<[number, number]>([0, 1e3]);
  const { format } = useFormatter();

  const unitOptionsF = unitOptions(type);

  const { valueControlled, valueControlledSet } = useValueControlled<ScaledRangeModel<TType>>({
    defaultValue,
    onChange,
    value,
  });

  useEffect(() => {
    !valueControlled?.unit && handleChange({ unit: unitOptionsF[0].id as TType });
  }, []);

  const handleBlur = (): void => {
    isRange &&
      valueControlled?.min &&
      valueControlled?.max &&
      valueControlled?.min > valueControlled?.max &&
      handleChange({ max: valueControlled.min, min: valueControlled.max });
  };

  const handleChange = ({
    max,
    min,
    rangeType: rangeTypeF,
    unit,
  }: ScaledRangeModel<TType> & {
    key?: keyof RangeModel<number>;
    rangeType?: RangeTypeModel;
  }): void => {
    const rangeTypeFF = rangeTypeF ?? rangeTypeState;
    const { lowerF, upperF } = (() => {
      switch (unit ?? valueControlled?.unit) {
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

    valueControlledSet({
      ...valueControlled,
      max:
        max === null
          ? undefined
          : max ?? valueControlled?.max ?? (rangeTypeF === RANGE_TYPE.RANGE ? upperF : undefined),
      min: min === null ? undefined : min ?? valueControlled?.min,
      unit: unit ?? valueControlled?.unit,
    });
  };

  return (
    <Wrapper
      {...wrapperProps}
      s={THEME_SIZE.SMALL}>
      <Text>{t('core:measureIn')}</Text>

      <RadioField<TType>
        isHorizontal
        onChange={(v) => handleChange({ unit: v })}
        options={unitOptionsF}
        value={valueControlled?.unit}
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
          rightElement={<Text color={theme.color.border}>{valueControlled?.unit}</Text>}
          value={valueControlled && valueControlled.min}
        />

        {isRange && (
          <NumberField
            error={error}
            flex
            keyboard={TEXT_FIELD_KEYBOARD.NUMBER_POSITIVE}
            label={t('data:max', { value: label })}
            onBlur={handleBlur}
            onChange={(v) => handleChange({ max: v ?? null })}
            rightElement={<Text color={theme.color.border}>{valueControlled?.unit}</Text>}
            value={valueControlled && valueControlled.max}
          />
        )}
      </Wrapper>

      <Slider
        formatter={(v) => format(v, { isScale: false, unit: valueControlled?.unit })}
        isRange={isRange}
        lower={range[0]}
        onChange={handleChange}
        upper={range[1]}
        value={valueControlled}
      />

      {!rangeType && (
        <Button
          onPress={() => handleChange({ rangeType: isRange ? RANGE_TYPE.EXACT : RANGE_TYPE.RANGE })}
          type={BUTTON_TYPE.INVISIBLE}>
          {isRange ? t('data:exactMessage') : t('data:rangeMessage')}
        </Button>
      )}
    </Wrapper>
  );
};
