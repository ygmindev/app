import findIndex from 'lodash/findIndex';
import toString from 'lodash/toString';
import { type ReactElement, useEffect, useState } from 'react';

import { Button } from '#lib-frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '#lib-frontend/core/components/Button/Button.constants';
import { Slider } from '#lib-frontend/core/components/Slider/Slider';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type LFCPropsModel } from '#lib-frontend/core/core.models';
import { FieldGroup } from '#lib-frontend/data/components/FieldGroup/FieldGroup';
import { NumberField } from '#lib-frontend/data/components/NumberField/NumberField';
import {
  type RangeFieldPropsModel,
  type RangeTypeModel,
} from '#lib-frontend/data/components/RangeField/RangeField.models';
import { RANGE_TYPE } from '#lib-frontend/data/components/RangeField/RangField.constants';
import { SelectField } from '#lib-frontend/data/components/SelectField/SelectField';
import { TEXT_FIELD_KEYBOARD } from '#lib-frontend/data/components/TextField/TextField.constants';
import { AMOUNT_UNIT, DATA } from '#lib-frontend/data/data.constants';
import { type NumberUnitModel } from '#lib-frontend/data/data.models';
import { useFormatter } from '#lib-frontend/data/hooks/useFormatter/useFormatter';
import { useValueControlled } from '#lib-frontend/data/hooks/useValueControlled/useValueControlled';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { THEME_SIZE } from '#lib-frontend/style/style.constants';
import { merge } from '#lib-shared/core/utils/merge/merge';
import { DATA_TYPE } from '#lib-shared/data/data.constants';
import { type ScaledNumberRangeModel } from '#lib-shared/data/resources/ScaledNumberRange/ScaledNumberRange.models';

export const RangeField = <TType extends NumberUnitModel>({
  defaultUnit,
  error,
  onChange,
  unitOptions,
  value,
  ...props
}: LFCPropsModel<RangeFieldPropsModel<TType>>): ReactElement<
  LFCPropsModel<RangeFieldPropsModel<TType>>
> => {
  const { t } = useTranslation([DATA]);
  const { wrapperProps } = useLayoutStyles({ props });
  const [rangeType, rangeTypeSet] = useState<RangeTypeModel>(RANGE_TYPE.EXACT);
  const isRange = rangeType === RANGE_TYPE.RANGE;
  const [range, rangeSet] = useState<[number, number]>([1, 1e3]);
  const { format, unformat } = useFormatter();
  const { valueControlled, valueControlledSet } = useValueControlled<ScaledNumberRangeModel<TType>>(
    { onChange, value },
  );

  useEffect(() => {
    handleChange({ key: 'value', unit: defaultUnit, value: value?.value?.value });
  }, [defaultUnit]);

  const handleBlur = (): void => {
    if (isRange && valueControlled?.value && valueControlled?.max) {
      const { max, value: min } = valueControlled;
      const [minValue, maxValue] = [
        unformat(DATA_TYPE.NUMBER, toString(min.value), { unit: min.unit }),
        unformat(DATA_TYPE.NUMBER, toString(max.value), { unit: max.unit }),
      ];
      if (minValue && maxValue && minValue > maxValue) {
        valueControlledSet({ max: valueControlled.value, value: valueControlled.max });
      }
    }
  };

  const handleChange = ({
    key,
    unit,
    value,
  }: {
    key: keyof ScaledNumberRangeModel<TType>;
    unit?: TType;
    value?: number;
  }): void => {
    const [valueF, lowerF, upperF] = (() => {
      switch (unit) {
        case AMOUNT_UNIT.BILLION:
          return [1, 1, 1e1];
        default:
          return [1e2, 1, 1e3];
      }
    })();
    rangeSet([lowerF, upperF]);
    valueControlledSet(merge([{ [key]: { unit, value: value ?? valueF } }, valueControlled]));
  };

  const getFieldElement = (key: keyof ScaledNumberRangeModel<TType>): ReactElement => {
    let unitOptionsF = unitOptions;
    if (key === 'max' && isRange && valueControlled?.value?.unit) {
      const minUnitIndex = findIndex(unitOptionsF, ({ id }) => id === valueControlled?.value?.unit);
      if (minUnitIndex >= 0) {
        unitOptionsF = unitOptionsF.slice(minUnitIndex);
      }
    }
    return (
      <FieldGroup
        fields={[
          {
            element: (
              <NumberField
                defaultValue={1}
                error={error}
                keyboard={TEXT_FIELD_KEYBOARD.NUMBER_POSITIVE}
                label={
                  isRange
                    ? key === 'max'
                      ? t('data:max', { value: t('funding:amount') })
                      : t('data:min', { value: t('funding:amount') })
                    : t('funding:amount')
                }
                onBlur={handleBlur}
                onChange={(v) => handleChange({ key, value: v })}
                value={valueControlled && valueControlled[key]?.value}
              />
            ),
            id: 'value',
          },
          {
            element: (
              <SelectField<TType>
                label={t('core:unit')}
                onChange={(v) => handleChange({ key, unit: v as TType })}
                options={unitOptionsF}
                value={valueControlled && valueControlled[key]?.unit}
              />
            ),
            id: 'unit',
          },
        ]}
      />
    );
  };

  const handleRangeTypeChange = (): void => {
    if (isRange) {
      const { max: _, ...rest } = valueControlled ?? {};
      valueControlledSet(rest);
      rangeTypeSet(RANGE_TYPE.EXACT);
    } else {
      const { value } = valueControlled ?? {};
      valueControlledSet({ max: { unit: value?.unit, value: range[1] }, value });
      rangeTypeSet(RANGE_TYPE.RANGE);
    }
  };

  return (
    <Wrapper
      {...wrapperProps}
      s={THEME_SIZE.SMALL}>
      {isRange ? (
        <Wrapper
          isDistribute
          isRowAlign>
          {getFieldElement('value')}

          {getFieldElement('max')}
        </Wrapper>
      ) : (
        getFieldElement('value')
      )}

      <Slider
        isRange={isRange}
        lower={range[0]}
        lowerFormatter={(v) => format(v, { isScale: false, unit: valueControlled?.value?.unit })}
        onChange={(v) =>
          valueControlledSet(
            merge([{ max: { value: v.max }, value: { value: v.value } }, valueControlled]),
          )
        }
        upper={range[1]}
        upperFormatter={(v) => format(v, { isScale: false, unit: valueControlled?.value?.unit })}
        value={{
          value: valueControlled?.value?.value,
          ...(isRange ? { max: valueControlled?.max?.value } : {}),
        }}
      />

      <Button
        onPress={handleRangeTypeChange}
        type={BUTTON_TYPE.INVISIBLE}>
        {rangeType === RANGE_TYPE.RANGE ? t('data:exactMessage') : t('data:rangeMessage')}
      </Button>
    </Wrapper>
  );
};
