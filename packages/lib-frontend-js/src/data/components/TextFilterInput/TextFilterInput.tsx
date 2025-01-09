import { type RLFCModel } from '@lib/frontend/core/core.models';
import { InputGroup } from '@lib/frontend/data/components/InputGroup/InputGroup';
import { MenuInput } from '@lib/frontend/data/components/MenuInput/MenuInput';
import {
  type TextFilterInputPropsModel,
  type TextFilterInputRefModel,
} from '@lib/frontend/data/components/TextFilterInput/TextFilterInput.models';
import { TextInput } from '@lib/frontend/data/components/TextInput/TextInput';
import { type InputRefModel } from '@lib/frontend/data/data.models';
import { useValueControlled } from '@lib/frontend/data/hooks/useValueControlled/useValueControlled';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
import { FILTER_CONDITION } from '@lib/shared/resource/utils/Filter/Filter.constants';
import { type FilterConditionModel } from '@lib/shared/resource/utils/Filter/Filter.models';
import { forwardRef, useImperativeHandle, useRef } from 'react';

export const TextFilterInput: RLFCModel<TextFilterInputRefModel, TextFilterInputPropsModel> =
  forwardRef(
    (
      {
        condition,
        defaultCondition = FILTER_CONDITION.CONTAINS,
        defaultValue,
        isContainsOnly,
        onChange,
        onConditionChange,
        value,
        ...props
      },
      ref,
    ) => {
      const { t } = useTranslation();
      const { wrapperProps } = useLayoutStyles({ props });
      const { style: _, ...propsF } = props;
      const { valueControlled, valueControlledSet } = useValueControlled({
        defaultValue,
        onChange,
        value,
      });
      const { valueControlled: conditionControlled, valueControlledSet: conditionControlledSet } =
        useValueControlled<FilterConditionModel>({
          defaultValue: defaultCondition,
          onChange: onConditionChange,
          value: condition,
        });

      const inputRef = useRef<InputRefModel>(null);

      useImperativeHandle(ref, () => ({
        ...inputRef.current,
        beforeSubmit: async (v, k) => [{ condition: conditionControlled, field: k, value: v }],
      }));

      return (
        <InputGroup
          {...wrapperProps}
          fields={filterNil([
            {
              element: (
                <TextInput
                  {...propsF}
                  icon="search"
                  onChange={valueControlledSet}
                  placeholder={t('core:any')}
                  ref={ref}
                  value={valueControlled}
                />
              ),
              id: 'value',
            },
            !isContainsOnly && {
              element: (
                <MenuInput
                  defaultValue={FILTER_CONDITION.CONTAINS}
                  label={t('core:condition')}
                  onChange={(v) => conditionControlledSet(v as FilterConditionModel)}
                  options={[
                    { id: FILTER_CONDITION.EQUAL, label: t('data:equal') },
                    { id: FILTER_CONDITION.NOT_EQUAL, label: t('data:notEqual') },
                    { id: FILTER_CONDITION.CONTAINS, label: t('data:contains') },
                  ]}
                  value={conditionControlled}
                />
              ),
              id: 'condition',
            },
          ])}
          ref={inputRef}
        />
      );
    },
  );
