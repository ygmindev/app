import { forwardRef, useImperativeHandle, useRef } from 'react';

import { type RLFCModel } from '#lib-frontend/core/core.models';
import { DropdownField } from '#lib-frontend/data/components/DropdownField/DropdownField';
import { FieldGroup } from '#lib-frontend/data/components/FieldGroup/FieldGroup';
import { TextField } from '#lib-frontend/data/components/TextField/TextField';
import {
  type TextFilterFieldPropsModel,
  type TextFilterFieldRefModel,
} from '#lib-frontend/data/components/TextFilterField/TextFilterField.models';
import { type FieldRefModel } from '#lib-frontend/data/data.models';
import { useValueControlled } from '#lib-frontend/data/hooks/useValueControlled/useValueControlled';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { FILTER_CONDITION } from '#lib-shared/resource/utils/Filter/Filter.constants';
import { type FilterConditionModel } from '#lib-shared/resource/utils/Filter/Filter.models';

export const TextFilterField: RLFCModel<TextFilterFieldRefModel, TextFilterFieldPropsModel> =
  forwardRef(({ defaultValue, onChange, value, ...props }, ref) => {
    const { t } = useTranslation();
    const { wrapperProps } = useLayoutStyles({ props });
    const { style: _, ...propsF } = props;
    const { valueControlled, valueControlledSet } = useValueControlled({
      defaultValue,
      onChange,
      value,
    });
    const { valueControlled: condition, valueControlledSet: conditionSet } =
      useValueControlled<FilterConditionModel>({
        defaultValue: FILTER_CONDITION.CONTAINS,
      });
    const fieldRef = useRef<FieldRefModel>(null);

    useImperativeHandle(ref, () => ({
      blur: () => fieldRef.current?.blur(),
      focus: () => fieldRef.current?.focus(),
      toFilter: (id) => [{ condition, field: id, value: valueControlled }],
    }));

    return (
      <FieldGroup
        {...wrapperProps}
        fields={[
          {
            element: (
              <TextField
                placeholder={t('core:any')}
                {...propsF}
                onChange={valueControlledSet}
                value={valueControlled}
              />
            ),
            id: 'value',
          },
          {
            element: (
              <DropdownField
                defaultValue={FILTER_CONDITION.CONTAINS}
                label={t('core:condition')}
                onChange={(value) => conditionSet(value as FilterConditionModel)}
                options={[
                  { id: FILTER_CONDITION.EQUAL, label: t('data:equal') },
                  { id: FILTER_CONDITION.NOT_EQUAL, label: t('data:notEqual') },
                  { id: FILTER_CONDITION.CONTAINS, label: t('data:contains') },
                ]}
                value={valueControlled}
              />
            ),
            id: 'condition',
          },
        ]}
        ref={fieldRef}
      />
    );
  });
