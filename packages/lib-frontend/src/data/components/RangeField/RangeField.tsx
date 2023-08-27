import findIndex from 'lodash/findIndex';
import toNumber from 'lodash/toNumber';
import toString from 'lodash/toString';
import { type ReactElement, useState } from 'react';

import { Button } from '#lib-frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '#lib-frontend/core/components/Button/Button.constants';
import { Slider } from '#lib-frontend/core/components/Slider/Slider';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '#lib-frontend/core/core.models';
import { FieldGroup } from '#lib-frontend/data/components/FieldGroup/FieldGroup';
import { DATA, NUMBER_UNIT_AMOUNT_OPTIONS } from '#lib-frontend/data/data.constants';
import { type NumberUnitModel } from '#lib-frontend/data/data.models';
import { useFormatter } from '#lib-frontend/data/hooks/useFormatter/useFormatter';
import {
  type RangeFieldPropsModel,
  type RangeTypeModel,
} from '#lib-frontend/data/components/RangeField/RangeField.models';
import { RANGE_TYPE } from '#lib-frontend/data/components/RangeField/RangField.constants';
import { SelectField } from '#lib-frontend/data/components/SelectField/SelectField';
import { TextField } from '#lib-frontend/data/components/TextField/TextField';
import { useValueControlled } from '#lib-frontend/data/hooks/useValueControlled/useValueControlled';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { THEME_SIZE } from '#lib-frontend/style/style.constants';
import { merge } from '#lib-shared/core/utils/merge/merge';
import { type ScaledNumberRangeModel } from '#lib-shared/data/resources/ScaledNumberRange/ScaledNumberRange.models';
import { DATA_TYPE_MORE } from '#lib-shared/data/data.constants';

export const RangeField: LFCModel<RangeFieldPropsModel> = ({
  defaultUnit,
  type,
  value,
  ...props
}) => {
  const { t } = useTranslation([DATA]);
  const { wrapperProps } = useLayoutStyles({ props });
  const [rangeType, rangeTypeSet] = useState<RangeTypeModel>(RANGE_TYPE.EXACT);
  const isRange = rangeType === RANGE_TYPE.RANGE;
  const [lower, lowerSet] = useState<number>(1);
  const [upper, upperSet] = useState<number>(1e3);
  const { valueControlled, valueControlledSet } = useValueControlled<ScaledNumberRangeModel>({
    defaultValue: {
      value: { unit: defaultUnit, value: 1 },
      ...(isRange ? { max: { unit: defaultUnit, value: 1000 } } : {}),
    },
  });
  const { format } = useFormatter();

  const getFieldElement = (key: keyof ScaledNumberRangeModel): ReactElement | null => {
    switch (type) {
      case DATA_TYPE_MORE.AMOUNT: {
        let unitOptions = NUMBER_UNIT_AMOUNT_OPTIONS;
        if (key === 'max' && isRange && valueControlled?.value?.unit) {
          const minUnitIndex = findIndex(
            unitOptions,
            ({ id }) => id === valueControlled?.value?.unit,
          );
          if (minUnitIndex >= 0) {
            unitOptions = unitOptions.slice(minUnitIndex);
          }
        }
        return (
          <FieldGroup
            fields={[
              {
                element: (
                  <TextField
                    keyboard={DATA_TYPE_MORE.NUMBER_POSITIVE}
                    label={
                      isRange
                        ? key === 'max'
                          ? t('data:max', { value: t('funding:amount') })
                          : t('data:min', { value: t('funding:amount') })
                        : t('funding:amount')
                    }
                    onChange={(v) =>
                      valueControlledSet(
                        merge([{ [key]: { value: toNumber(v) } }, valueControlled]),
                      )
                    }
                    value={valueControlled && toString(valueControlled[key]?.value)}
                  />
                ),
                id: 'value',
              },
              {
                element: (
                  <SelectField<NumberUnitModel>
                    label={t('core:unit')}
                    onChange={(v: NumberUnitModel) =>
                      valueControlledSet(merge([{ [key]: { unit: v } }, valueControlled]))
                    }
                    options={unitOptions}
                    value={valueControlled && valueControlled[key]?.unit}
                  />
                ),
                id: 'unit',
              },
            ]}
            grow
            shrink
          />
        );
      }
      default:
        return null;
    }
  };

  return (
    <Wrapper
      {...wrapperProps}
      s={THEME_SIZE.SMALL}>
      {isRange ? (
        <Wrapper isRowAlign>
          {getFieldElement('value')}

          {getFieldElement('max')}
        </Wrapper>
      ) : (
        getFieldElement('value')
      )}

      <Slider
        isRange={isRange}
        lower={lower}
        lowerFormatter={(v) => format(v, { isScale: false, unit: valueControlled?.value?.unit })}
        onChange={(v) =>
          valueControlledSet(
            merge([{ max: { value: v.max }, value: { value: v.value } }, valueControlled]),
          )
        }
        upper={upper}
        upperFormatter={(v) => format(v, { isScale: false, unit: valueControlled?.value?.unit })}
        value={{
          value: valueControlled?.value?.value,
          ...(isRange ? { max: valueControlled?.max?.value } : {}),
        }}
      />

      <Button
        onPress={() =>
          rangeTypeSet(rangeType === RANGE_TYPE.RANGE ? RANGE_TYPE.EXACT : RANGE_TYPE.RANGE)
        }
        type={BUTTON_TYPE.INVISIBLE}>
        {rangeType === RANGE_TYPE.RANGE ? t('data:exactMessage') : t('data:rangeMessage')}
      </Button>
    </Wrapper>
  );
};
