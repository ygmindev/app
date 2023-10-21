import { type ReactElement, useState } from 'react';

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
import { AMOUNT_UNIT, DATA, RELATIVE_DATE_UNIT } from '#lib-frontend/data/data.constants';
import { type NumberUnitModel } from '#lib-frontend/data/data.models';
import { useFormatter } from '#lib-frontend/data/hooks/useFormatter/useFormatter';
import { useValueControlled } from '#lib-frontend/data/hooks/useValueControlled/useValueControlled';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { THEME_SIZE } from '#lib-frontend/style/style.constants';
import { filterNil } from '#lib-shared/core/utils/filterNil/filterNil';
import { type RangeModel } from '#lib-shared/data/data.models';
import { type ScaledNumberRangeModel } from '#lib-shared/data/resources/ScaledNumberRange/ScaledNumberRange.models';

export const RangeField = <TType extends NumberUnitModel>({
  defaultValue,
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
  // TODO: adjust range
  const [range, rangeSet] = useState<[number, number]>([0, 1e3]);
  const { format } = useFormatter();
  const { valueControlled, valueControlledSet } = useValueControlled<ScaledNumberRangeModel<TType>>(
    { defaultValue, onChange, value },
  );

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
  }: ScaledNumberRangeModel<TType> & {
    key?: keyof RangeModel<number>;
    rangeType?: RangeTypeModel;
  }): void => {
    const rangeTypeFF = rangeTypeF ?? rangeType;
    const { lowerF, maxF, minF, upperF } = (() => {
      switch (unit ?? valueControlled?.unit) {
        case RELATIVE_DATE_UNIT.DAY:
          return {
            lowerF: 0,
            maxF: rangeTypeFF === RANGE_TYPE.RANGE ? max ?? 90 : undefined,
            minF: min,
            upperF: 365,
          };
        case RELATIVE_DATE_UNIT.WEEK:
          return {
            lowerF: 0,
            maxF: rangeTypeFF === RANGE_TYPE.RANGE ? max ?? 36 : undefined,
            minF: min,
            upperF: 52,
          };
        case RELATIVE_DATE_UNIT.MONTH:
          return {
            lowerF: 0,
            maxF: rangeTypeFF === RANGE_TYPE.RANGE ? max ?? 12 : undefined,
            minF: min,
            upperF: 18,
          };
        case RELATIVE_DATE_UNIT.YEAR:
          return {
            lowerF: 0,
            maxF: rangeTypeFF === RANGE_TYPE.RANGE ? max ?? 1e1 : undefined,
            minF: min,
            upperF: 1e2,
          };
        case AMOUNT_UNIT.BILLION:
          return {
            lowerF: 0,
            maxF: rangeTypeFF === RANGE_TYPE.RANGE ? max ?? 5 : undefined,
            minF: min,
            upperF: 1e1,
          };
        default:
          return {
            lowerF: 10,
            maxF: rangeTypeFF === RANGE_TYPE.RANGE ? max ?? 500 : undefined,
            minF: min,
            upperF: 1e3,
          };
      }
    })();
    rangeSet([lowerF, upperF]);
    if (rangeTypeF) {
      rangeTypeSet(rangeTypeF);
    }
    valueControlledSet({
      ...valueControlled,
      max: maxF === minF ? undefined : maxF,
      min: minF,
      unit: unit ?? valueControlled?.unit,
    });
  };

  return (
    <Wrapper
      {...wrapperProps}
      s={THEME_SIZE.SMALL}>
      <FieldGroup
        fields={filterNil([
          {
            element: (
              <NumberField
                error={error}
                keyboard={TEXT_FIELD_KEYBOARD.NUMBER_POSITIVE}
                label={
                  isRange ? t('data:min', { value: t('funding:amount') }) : t('funding:amount')
                }
                onBlur={handleBlur}
                onChange={(v) => handleChange({ min: v })}
                value={valueControlled && valueControlled.min}
              />
            ),
            id: 'min',
          },
          isRange && {
            element: (
              <NumberField
                error={error}
                keyboard={TEXT_FIELD_KEYBOARD.NUMBER_POSITIVE}
                label={t('data:max', { value: t('funding:amount') })}
                onBlur={handleBlur}
                onChange={(v) => handleChange({ max: v })}
                value={valueControlled && valueControlled.max}
              />
            ),
            id: 'max',
          },
          {
            element: (
              <SelectField<TType>
                label={t('core:unit')}
                onChange={(v) => handleChange({ unit: v as TType })}
                options={unitOptions}
                value={valueControlled?.unit}
              />
            ),
            id: 'unit',
          },
        ])}
      />

      <Slider
        formatter={(v) => format(v, { isScale: false, unit: valueControlled?.unit })}
        isRange={isRange}
        lower={range[0]}
        onChange={handleChange}
        upper={range[1]}
        value={valueControlled}
      />

      <Button
        onPress={() => handleChange({ rangeType: isRange ? RANGE_TYPE.EXACT : RANGE_TYPE.RANGE })}
        type={BUTTON_TYPE.INVISIBLE}>
        {isRange ? t('data:exactMessage') : t('data:rangeMessage')}
      </Button>
    </Wrapper>
  );
};
