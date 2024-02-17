import { Button } from '@lib/frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '@lib/frontend/core/components/Button/Button.constants';
import { Slider } from '@lib/frontend/core/components/Slider/Slider';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type LFCPropsModel, type RLFCPropsModel } from '@lib/frontend/core/core.models';
import { NumberInput } from '@lib/frontend/data/components/NumberInput/NumberInput';
import { NUMBER_RANGE_TYPE } from '@lib/frontend/data/components/NumberRangeInput/NumberRangeInput.constants';
import {
  type NumberRangeInputPropsModel,
  type NumberRangeInputRefModel,
  type NumberRangeTypeModel,
} from '@lib/frontend/data/components/NumberRangeInput/NumberRangeInput.models';
import { unitOptions } from '@lib/frontend/data/components/ScaledNumberInput/ScaledNumberInput';
import { SelectInput } from '@lib/frontend/data/components/SelectInput/SelectInput';
import { TEXT_INPUT_KEYBOARD } from '@lib/frontend/data/components/TextInput/TextInput.constants';
import { DATA } from '@lib/frontend/data/data.constants';
import { useValueScaled } from '@lib/frontend/data/hooks/useValueScaled/useValueScaled';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { THEME_SIZE } from '@lib/frontend/style/style.constants';
import { type NumberRangeModel } from '@lib/shared/data/resources/NumberRange/NumberRange.models';
import { numberFormat } from '@lib/shared/data/utils/numberFormat/numberFormat';
import {
  AMOUNT_UNIT,
  NUMBER_UNIT_TYPE,
  RELATIVE_DATE_UNIT,
} from '@lib/shared/data/utils/numberFormat/numberFormat.constants';
import { type NumberUnitModel } from '@lib/shared/data/utils/numberFormat/numberFormat.models';
import { type ForwardedRef, forwardRef, type ReactElement, useEffect, useState } from 'react';

export const NumberRangeInput = forwardRef(
  <TType extends NumberUnitModel>(
    {
      defaultUnit,
      defaultValue,
      error,
      label,
      onChange,
      rangeType,
      type = NUMBER_UNIT_TYPE.AMOUNT,
      value,
      ...props
    }: LFCPropsModel<NumberRangeInputPropsModel<TType>>,
    ref: ForwardedRef<NumberRangeInputRefModel>,
  ): ReactElement<RLFCPropsModel<NumberRangeInputRefModel, NumberRangeInputPropsModel<TType>>> => {
    const theme = useTheme();
    const { t } = useTranslation([DATA]);
    const { wrapperProps } = useLayoutStyles({ props });
    const [rangeTypeState, rangeTypeSet] = useState<NumberRangeTypeModel>(
      rangeType ?? NUMBER_RANGE_TYPE.EXACT,
    );
    const isRange = rangeTypeState === NUMBER_RANGE_TYPE.RANGE;
    // TODO: adjust default range
    const [range, rangeSet] = useState<[number, number]>([0, 1e3]);

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
        {label && <Text isBold>{t(label)}</Text>}

        <Text>{t('core:measureIn')}</Text>

        <SelectInput<TType>
          onChange={(v) => handleChange({ unit: v })}
          options={unitOptionsF}
          value={unit}
        />

        <Wrapper
          isAlign
          isRow>
          <NumberInput
            error={error}
            flex
            keyboard={TEXT_INPUT_KEYBOARD.NUMBER_POSITIVE}
            label={isRange ? t('data:min', { value: label }) : label}
            onBlur={handleBlur}
            onChange={(v) => handleChange({ min: v ?? null })}
            placeholder={t('core:any')}
            ref={ref}
            rightElement={<Text color={theme.color.border}>{unit}</Text>}
            value={valueScaled?.min}
          />

          {isRange && (
            <NumberInput
              error={error}
              flex
              keyboard={TEXT_INPUT_KEYBOARD.NUMBER_POSITIVE}
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
          formatter={(v) => numberFormat(v, { unit })}
          isRange={isRange}
          lower={range[0]}
          onChange={handleChange}
          upper={range[1]}
          value={{ max: valueScaled?.max, min: valueScaled?.min }}
        />

        {!rangeType && (
          <Button
            onPress={() =>
              handleChange({
                rangeType: isRange ? NUMBER_RANGE_TYPE.EXACT : NUMBER_RANGE_TYPE.RANGE,
              })
            }
            type={BUTTON_TYPE.INVISIBLE}>
            {isRange ? t('data:exactMessage') : t('data:rangeMessage')}
          </Button>
        )}
      </Wrapper>
    );
  },
);
