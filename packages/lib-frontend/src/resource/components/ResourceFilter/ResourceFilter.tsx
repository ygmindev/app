import { type ReactElement, useMemo } from 'react';

import { SelectField } from '#lib-frontend/core/components/SelectField/SelectField';
import { type LFCPropsModel } from '#lib-frontend/core/core.models';
import { FilterContainer } from '#lib-frontend/data/components/FilterContainer/FilterContainer';
import { type FormFieldModel } from '#lib-frontend/data/components/FormContainer/FormContainer.models';
import { NumberRangeField } from '#lib-frontend/data/components/NumberRangeField/NumberRangeField';
import { NUMBER_RANGE_TYPE } from '#lib-frontend/data/components/NumberRangeField/NumberRangeField.constants';
import { TextFilterField } from '#lib-frontend/data/components/TextFilterField/TextFilterField';
import { NUMBER_UNIT_TYPE } from '#lib-frontend/data/data.constants';
import { type ResourceFilterPropsModel } from '#lib-frontend/resource/components/ResourceFilter/ResourceFilter.models';
import { DATA_TYPE, DATA_TYPE_MORE } from '#lib-shared/data/data.constants';

export const ResourceFilter = <TType,>({
  columns,
  ...props
}: LFCPropsModel<ResourceFilterPropsModel<TType>>): ReactElement<
  LFCPropsModel<ResourceFilterPropsModel<TType>>
> => {
  const fields = useMemo<Array<FormFieldModel<TType>> | undefined>(
    () =>
      columns?.map(({ id, label, options, type }) => {
        const labelF = label ?? id;
        const element = (() => {
          switch (type) {
            case DATA_TYPE_MORE.STRING_LIST:
              return (
                <SelectField
                  isHorizontal
                  isMultiple
                  label={labelF}
                  options={options ?? []}
                />
              );
            case DATA_TYPE.NUMBER:
              return (
                <NumberRangeField
                  label={labelF}
                  rangeType={NUMBER_RANGE_TYPE.RANGE}
                />
              );
            case NUMBER_UNIT_TYPE.AMOUNT:
            case NUMBER_UNIT_TYPE.RELATIVE_DATE:
              return (
                <NumberRangeField
                  label={labelF}
                  rangeType={NUMBER_RANGE_TYPE.RANGE}
                  type={type}
                />
              );
            default:
              return <TextFilterField label={labelF} />;
          }
        })();
        return { element, id };
      }),
    [columns],
  );
  return (
    <FilterContainer
      {...props}
      fields={fields}
      onSubmit={async (data) => console.warn(data)}
    />
  );
};
