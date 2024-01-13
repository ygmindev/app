import { type ReactElement, useMemo } from 'react';

import { SelectField } from '@lib-frontend/core/components/SelectField/SelectField';
import { type LFCPropsModel } from '@lib-frontend/core/core.models';
import { FormContainer } from '@lib-frontend/data/components/FormContainer/FormContainer';
import { type FormTileModel } from '@lib-frontend/data/components/FormContainer/FormContainer.models';
import { NumberRangeField } from '@lib-frontend/data/components/NumberRangeField/NumberRangeField';
import { NUMBER_RANGE_TYPE } from '@lib-frontend/data/components/NumberRangeField/NumberRangeField.constants';
import { TextFilterField } from '@lib-frontend/data/components/TextFilterField/TextFilterField';
import { NUMBER_UNIT_TYPE } from '@lib-frontend/data/data.constants';
import { type ResourceFilterPropsModel } from '@lib-frontend/resource/components/ResourceFilter/ResourceFilter.models';
import { filterNil } from '@lib-shared/core/utils/filterNil/filterNil';
import { DATA_TYPE, DATA_TYPE_MORE } from '@lib-shared/data/data.constants';
import { FILTER_CONDITION } from '@lib-shared/resource/utils/Filter/Filter.constants';
import { type FilterModel } from '@lib-shared/resource/utils/Filter/Filter.models';

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
      fields?.map(({ id, label, options, type }) => {
        const labelF = label ?? id;
        const element = (() => {
          switch (type) {
            case DATA_TYPE_MORE.STRING_LIST:
              return (
                <SelectField
                  beforeSubmit={async (v, k) => [
                    { condition: FILTER_CONDITION.IN, field: k, value: v },
                  ]}
                  isHorizontal
                  isMultiple
                  options={options ?? []}
                />
              );

            case DATA_TYPE.NUMBER:
            case NUMBER_UNIT_TYPE.AMOUNT:
            case NUMBER_UNIT_TYPE.RELATIVE_DATE:
              return (
                <NumberRangeField
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
                  type={type === DATA_TYPE.NUMBER ? undefined : type}
                />
              );
            default:
              return <TextFilterField label={labelF} />;
          }
        })();
        return { fields: [{ element, id }], id, title: id };
      }) ?? [],
    [fields],
  );

  // TODO: better typing for TType -> filters?
  const handleSubmit = onSubmit
    ? async (filters: TType): Promise<TResult | null> =>
        onSubmit(
          Object.values(filters as Record<string, Array<FilterModel<TType>>>).reduce(
            (result, v) => [...result, ...v],
            [] as Array<FilterModel<TType>>,
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
