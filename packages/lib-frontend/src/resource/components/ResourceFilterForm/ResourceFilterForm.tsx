import isNil from 'lodash/isNil';
import { type ReactElement } from 'react';

import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type LFCPropsModel } from '#lib-frontend/core/core.models';
import { FormContainer } from '#lib-frontend/data/components/FormContainer/FormContainer';
import { ResourceFilterField } from '#lib-frontend/resource/components/ResourceFilterField/ResourceFilterField';
import { type ResourceFilterFormPropsModel } from '#lib-frontend/resource/components/ResourceFilterForm/ResourceFilterForm.models';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { type EntityResourceDataModel } from '#lib-shared/resource/resources/EntityResource/EntityResource.models';
import { FILTER_CONDITION } from '#lib-shared/resource/utils/Filter/Filter.constants';
import { type FilterModel } from '#lib-shared/resource/utils/Filter/Filter.models';

export const ResourceFilterForm = <
  TType,
  TForm = EntityResourceDataModel<TType>,
  TRoot = undefined,
>({
  filters,
  onSubmit,
  ...props
}: LFCPropsModel<ResourceFilterFormPropsModel<TType, TForm, TRoot>>): ReactElement<
  LFCPropsModel<ResourceFilterFormPropsModel<TType, TForm, TRoot>>
> => {
  const { wrapperProps } = useLayoutStyles({ props });
  const handleSubmit = async (data: TType): Promise<void> => {
    const filterData = filters
      ? filters.reduce(
          (result, filter) => {
            const value = data[filter.id];
            return isNil(value)
              ? result
              : [
                  ...result,
                  {
                    condition: FILTER_CONDITION.CONTAINS,
                    field: filter.id,
                    value: value as string,
                  },
                ];
          },
          [] as Array<FilterModel<TType>>,
        )
      : [];
    onSubmit && (await onSubmit(filterData));
  };
  return (
    <Wrapper {...wrapperProps}>
      <FormContainer
        fields={filters?.map(({ id, type }) => ({
          element: (
            <ResourceFilterField<TType, TForm, TRoot>
              id={id}
              key={id}
              type={type}
            />
          ),
          id,
        }))}
        isFullWidth
        isRowAlign
        onSubmit={handleSubmit}
        shrink={1}
      />
    </Wrapper>
  );
};
