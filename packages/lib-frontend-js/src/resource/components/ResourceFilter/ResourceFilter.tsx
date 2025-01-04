import { type LFCPropsModel } from '@lib/frontend/core/core.models';
import { FormContainer } from '@lib/frontend/data/components/FormContainer/FormContainer';
import { type FormTileModel } from '@lib/frontend/data/components/FormContainer/FormContainer.models';
import { NumberRangeInput } from '@lib/frontend/data/components/NumberRangeInput/NumberRangeInput';
import { NUMBER_RANGE_TYPE } from '@lib/frontend/data/components/NumberRangeInput/NumberRangeInput.constants';
import { SelectInput } from '@lib/frontend/data/components/SelectInput/SelectInput';
import { TextFilterInput } from '@lib/frontend/data/components/TextFilterInput/TextFilterInput';
import { type ResourceFilterPropsModel } from '@lib/frontend/resource/components/ResourceFilter/ResourceFilter.models';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
import { DATA_TYPE } from '@lib/shared/data/data.constants';
import { FILTER_CONDITION } from '@lib/shared/resource/utils/Filter/Filter.constants';
import { type FilterModel } from '@lib/shared/resource/utils/Filter/Filter.models';
import isNil from 'lodash/isNil';
import { type ReactElement, useMemo } from 'react';

export const ResourceFilter = <TType, TResult = void, TRoot = undefined>({
  fields,
  onSubmit,
  rootName,
  ...props
}: LFCPropsModel<ResourceFilterPropsModel<TType, TResult, TRoot>>): ReactElement<
  LFCPropsModel<ResourceFilterPropsModel<TType, TResult, TRoot>>
> => {
  const fieldsF = useMemo<Array<FormTileModel<TType>>>(
    () =>
      fields?.reduce(
        (result, { field, fields: embeddedFields, id, isArray, label, options, type }) => {
          if (embeddedFields && !field) {
            return result;
          }
          const labelF = label ?? id;
          const element = (() => {
            switch (type) {
              case DATA_TYPE.NUMBER:
                // case NUMBER_UNIT_TYPE.AMOUNT:
                // case NUMBER_UNIT_TYPE.RELATIVE_DATE:
                return (
                  <NumberRangeInput
                    beforeSubmit={async (value, field) =>
                      filterNil([
                        !!value?.min && {
                          condition: FILTER_CONDITION.GRATER_THAN_EQUAL,
                          field,
                          value: value.min,
                        },
                        !!value?.max && {
                          condition: FILTER_CONDITION.LESS_THAN_EQUAL,
                          field,
                          value: value.max,
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
                  <TextFilterInput label={labelF} />
                );
            }
          })();
          return [...result, { fields: [{ element, id }], id }];
        },
        [] as Array<FormTileModel<TType>>,
      ) ?? [],
    [fields],
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
    />
  );
};
