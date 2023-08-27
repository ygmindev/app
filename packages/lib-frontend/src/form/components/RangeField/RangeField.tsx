import toNumber from 'lodash/toNumber';
import toString from 'lodash/toString';
import { type ReactElement } from 'react';

import { Button } from '#lib-frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '#lib-frontend/core/components/Button/Button.constants';
import { Slider } from '#lib-frontend/core/components/Slider/Slider';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '#lib-frontend/core/core.models';
import {
  DATA,
  NUMBER_UNIT_AMOUNT,
  NUMBER_UNIT_AMOUNT_OPTIONS,
} from '#lib-frontend/data/data.constants';
import { FieldGroup } from '#lib-frontend/form/components/FieldGroup/FieldGroup';
import {
  type RangeFieldPropsModel,
  type RangeTypeModel,
} from '#lib-frontend/form/components/RangeField/RangeField.models';
import { RANGE_TYPE } from '#lib-frontend/form/components/RangeField/RangField.constants';
import { SelectField } from '#lib-frontend/form/components/SelectField/SelectField';
import { TextField } from '#lib-frontend/form/components/TextField/TextField';
import { useValueControlled } from '#lib-frontend/form/hooks/useValueControlled/useValueControlled';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { THEME_SIZE } from '#lib-frontend/style/style.constants';
import { FIELD_TYPE_MORE } from '#lib-shared/form/form.constants';
import { type RangeModel } from '#lib-shared/form/form.models';

export const RangeField: LFCModel<RangeFieldPropsModel> = ({ type, value, ...props }) => {
  const { t } = useTranslation([DATA]);
  const { wrapperProps } = useLayoutStyles({ props });

  const { valueControlled, valueControlledSet } = useValueControlled<RangeModel<number>>({});
  const { valueControlled: rangeType, valueControlledSet: rangeTypeSet } =
    useValueControlled<RangeTypeModel>({ defaultValue: RANGE_TYPE.EXACT });
  const { valueControlled: lower, valueControlledSet: lowerSet } = useValueControlled<number>({
    defaultValue: 1,
  });
  const { valueControlled: upper, valueControlledSet: upperSet } = useValueControlled<number>({
    defaultValue: 1e3,
  });

  const getFieldElement = (): ReactElement | null => {
    switch (type) {
      case FIELD_TYPE_MORE.AMOUNT:
        return (
          <FieldGroup
            fields={[
              {
                element: (
                  <TextField
                    keyboard={FIELD_TYPE_MORE.NUMBER_POSITIVE}
                    label={t('funding:amount')}
                    onChange={(v) => valueControlledSet({ value: toNumber(v) })}
                    value={toString(valueControlled?.value)}
                  />
                ),
                id: 'value',
              },
              {
                element: (
                  <SelectField
                    defaultValue={NUMBER_UNIT_AMOUNT.MILLION}
                    label={t('core:unit')}
                    options={NUMBER_UNIT_AMOUNT_OPTIONS}
                  />
                ),
                id: 'unit',
              },
            ]}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Wrapper
      {...wrapperProps}
      s={THEME_SIZE.SMALL}>
      <Wrapper isHorizontalCenter>
        {rangeType === RANGE_TYPE.BOUND ? getFieldElement() : getFieldElement()}
      </Wrapper>

      <Slider
        isRange={rangeType === RANGE_TYPE.EXACT}
        lower={lower}
        onChange={valueControlledSet}
        upper={upper}
        value={valueControlled}
      />

      <Button
        onPress={() =>
          rangeTypeSet(rangeType === RANGE_TYPE.BOUND ? RANGE_TYPE.EXACT : RANGE_TYPE.BOUND)
        }
        type={BUTTON_TYPE.TRANSPARENT}>
        {rangeType === RANGE_TYPE.BOUND ? t('data:exactMessage') : t('data:boundMessage')}
      </Button>
    </Wrapper>
  );
};
