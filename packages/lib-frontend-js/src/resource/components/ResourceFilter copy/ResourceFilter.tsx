import { Button } from '@lib/frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '@lib/frontend/core/components/Button/Button.constants';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type LFCPropsModel } from '@lib/frontend/core/core.models';
import { FormContainer } from '@lib/frontend/data/components/FormContainer/FormContainer';
import { type FormTileModel } from '@lib/frontend/data/components/FormContainer/FormContainer.models';
import { NumberRangeInput } from '@lib/frontend/data/components/NumberRangeInput/NumberRangeInput';
import { NUMBER_RANGE_TYPE } from '@lib/frontend/data/components/NumberRangeInput/NumberRangeInput.constants';
import { SelectInput } from '@lib/frontend/data/components/SelectInput/SelectInput';
import { TextFilterInput } from '@lib/frontend/data/components/TextFilterInput/TextFilterInput';
import { useValueControlled } from '@lib/frontend/data/hooks/useValueControlled/useValueControlled';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { type ResourceFilterPropsModel } from '@lib/frontend/resource/components/ResourceFilter/ResourceFilter.models';
import { THEME_SIZE } from '@lib/frontend/style/style.constants';
import { FLEX_JUSTIFY } from '@lib/frontend/style/utils/styler/flexStyler/flexStyler.constants';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
import { DATA_TYPE } from '@lib/shared/data/data.constants';
import { FILTER_CONDITION } from '@lib/shared/resource/utils/Filter/Filter.constants';
import { type FilterModel } from '@lib/shared/resource/utils/Filter/Filter.models';
import isNil from 'lodash/isNil';
import { type ReactElement, useMemo } from 'react';

export const ResourceFilter = <TType, TResult = void, TRoot = undefined>({
  fields,
  onChange,
  onSubmit,
  rootName,
  value,
  ...props
}: LFCPropsModel<ResourceFilterPropsModel<TType, TResult, TRoot>>): ReactElement<
  LFCPropsModel<ResourceFilterPropsModel<TType, TResult, TRoot>>
> => {
  const { t } = useTranslation();

  const { valueControlled, valueControlledSet } = useValueControlled({ defaultValue: value });

  const fieldsF = useMemo<Array<FormTileModel<TType>>>(
    () =>
      fields?.reduce(
        (result, { field, fields: embeddedFields, id, isArray, label, options, type }) => {
          if (embeddedFields && !field) {
            return result;
          }
          const v = valueControlled?.find((v) => v.field === id);
          const labelF = label ?? id;
          const element = (() => {
            switch (type) {
              case DATA_TYPE.NUMBER:
                // case NUMBER_UNIT_TYPE.AMOUNT:
                // case NUMBER_UNIT_TYPE.RELATIVE_DATE:
                return (
                  <NumberRangeInput
                    beforeSubmit={async (v, field) =>
                      filterNil([
                        !!v?.min && {
                          condition: FILTER_CONDITION.GRATER_THAN_EQUAL,
                          field,
                          value: v.min,
                        },
                        !!v?.max && {
                          condition: FILTER_CONDITION.LESS_THAN_EQUAL,
                          field,
                          value: v.max,
                        },
                      ])
                    }
                    rangeType={NUMBER_RANGE_TYPE.RANGE}
                  />
                );
              default:
                return options ? (
                  <SelectInput
                    beforeSubmit={async (v, k) => [
                      { condition: FILTER_CONDITION.IN, field: k, value: v },
                    ]}
                    isMultiple={isArray}
                    options={options ?? []}
                  />
                ) : (
                  <TextFilterInput
                    condition={v?.condition}
                    isValueOnly
                    label={labelF}
                    value={v?.value as string}
                  />
                );
            }
          })();
          return [...result, { fields: [{ element, id }], id }];
        },
        [] as Array<FormTileModel<TType>>,
      ) ?? [],
    [fields, valueControlled],
  );

  const handleSubmit = onSubmit
    ? async (filters: TType): Promise<TResult | null> =>
        onSubmit(
          Object.values(filters as Record<string, Array<FilterModel<TType>>>).reduce(
            (result, v) => [...result, ...(v ? v.filter((vv) => !isNil(vv.value)) : [])],
            [],
          ),
        )
    : undefined;

  return (
    <FormContainer
      {...props}
      fields={fieldsF}
      isFullHeight
      onSubmit={handleSubmit}
      p
      topElement={() => (
        <Wrapper
          isRow
          justify={FLEX_JUSTIFY.END}>
          <Button
            icon="switch"
            onPress={() => valueControlledSet([])}
            size={THEME_SIZE.SMALL}
            type={BUTTON_TYPE.TRANSPARENT}>
            {t('resource:clearAllFilters')}
          </Button>
        </Wrapper>
      )}
    />
  );
};
