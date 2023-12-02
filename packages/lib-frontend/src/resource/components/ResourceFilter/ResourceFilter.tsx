import { type ReactElement, useMemo } from 'react';

import { SelectField } from '#lib-frontend/core/components/SelectField/SelectField';
import { type LFCPropsModel } from '#lib-frontend/core/core.models';
import { FormContainer } from '#lib-frontend/data/components/FormContainer/FormContainer';
import { type FormTileModel } from '#lib-frontend/data/components/FormContainer/FormContainer.models';
import { NumberRangeField } from '#lib-frontend/data/components/NumberRangeField/NumberRangeField';
import { NUMBER_RANGE_TYPE } from '#lib-frontend/data/components/NumberRangeField/NumberRangeField.constants';
import { TextFilterField } from '#lib-frontend/data/components/TextFilterField/TextFilterField';
import { NUMBER_UNIT_TYPE } from '#lib-frontend/data/data.constants';
import { type ResourceFilterPropsModel } from '#lib-frontend/resource/components/ResourceFilter/ResourceFilter.models';
import { DATA_TYPE, DATA_TYPE_MORE } from '#lib-shared/data/data.constants';
import { type FilterModel } from '#lib-shared/resource/utils/Filter/Filter.models';

export const ResourceFilter = <TType, TResult = void>({
  columns,
  onSubmit,
  ...props
}: LFCPropsModel<ResourceFilterPropsModel<TType, TResult>>): ReactElement<
  LFCPropsModel<ResourceFilterPropsModel<TType, TResult>>
> => {
  const fields = useMemo<Array<FormTileModel<TType>> | undefined>(
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
                  options={options ?? []}
                />
              );
            case DATA_TYPE.NUMBER:
              return <NumberRangeField rangeType={NUMBER_RANGE_TYPE.RANGE} />;
            case NUMBER_UNIT_TYPE.AMOUNT:
            case NUMBER_UNIT_TYPE.RELATIVE_DATE:
              return (
                <NumberRangeField
                  rangeType={NUMBER_RANGE_TYPE.RANGE}
                  type={type}
                />
              );
            default:
              return <TextFilterField label={labelF} />;
          }
        })();
        return { fields: [{ element, id }], id, title: id };
      }),
    [columns],
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
      fields={fields}
      onSubmit={handleSubmit}
    />
  );
};
