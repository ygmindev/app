import { type LFCPropsModel } from '@lib/frontend/core/core.models';
import { FormContainer } from '@lib/frontend/data/components/FormContainer/FormContainer';
import { type FormFieldsModel } from '@lib/frontend/data/components/FormContainer/FormContainer.models';
import { NumberRangeInput } from '@lib/frontend/data/components/NumberRangeInput/NumberRangeInput';
import { NUMBER_RANGE_TYPE } from '@lib/frontend/data/components/NumberRangeInput/NumberRangeInput.constants';
import { SelectInput } from '@lib/frontend/data/components/SelectInput/SelectInput';
import { TextFilterInput } from '@lib/frontend/data/components/TextFilterInput/TextFilterInput';
import { type ResourceFilterPropsModel } from '@lib/frontend/resource/components/ResourceFilter/ResourceFilter.models';
import { type StringKeyModel } from '@lib/shared/core/core.models';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
import { DATA_TYPE } from '@lib/shared/data/data.constants';
import { FILTER_CONDITION } from '@lib/shared/resource/utils/Filter/Filter.constants';
import { type ReactElement } from 'react';

export const ResourceFilter = <TType, TKey extends StringKeyModel<TType>>({
  field,
  ...props
}: LFCPropsModel<ResourceFilterPropsModel<TType, TKey>>): ReactElement<
  LFCPropsModel<ResourceFilterPropsModel<TType, TKey>>
> => {
  const getFields = (): Array<FormFieldsModel<TType>> => {
    const labelF = field.label ?? field.id;
    const element = (() => {
      switch (field.type) {
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
          return field.options ? (
            <SelectInput
              beforeSubmit={async (v, k) => [
                { condition: FILTER_CONDITION.IN, field: k, value: v },
              ]}
              isMultiple={field.isArray}
              options={field.options ?? []}
            />
          ) : (
            <TextFilterInput
              isValueOnly
              label={labelF}
            />
          );
      }
    })();
    return [{ fields: [{ element, id: field.id }], id: field.id }];
  };

  // const handleSubmit = onSubmit
  //   ? async (filters: TType): Promise<TResult | null> =>
  //       onSubmit(
  //         Object.values(filters as Record<string, Array<FilterModel<TType>>>).reduce(
  //           (result, v) => [...result, ...(v ? v.filter((vv) => !isNil(vv.value)) : [])],
  //           [],
  //         ),
  //       )
  //   : undefined;

  return (
    <FormContainer
      {...props}
      fields={getFields()}
      // onSubmit={handleSubmit}
    />
  );
};
