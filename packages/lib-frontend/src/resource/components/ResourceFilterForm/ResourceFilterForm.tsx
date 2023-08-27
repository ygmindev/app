import isNil from 'lodash/isNil';
import { type ReactElement } from 'react';

import { type SFCPropsModel } from '#lib-frontend/core/core.models';
import { FormContainer } from '#lib-frontend/data/components/FormContainer/FormContainer';
import { ResourceFilterField } from '#lib-frontend/resource/components/ResourceFilterField/ResourceFilterField';
import { type ResourceFilterFormPropsModel } from '#lib-frontend/resource/components/ResourceFilterForm/ResourceFilterForm.models';
import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';
import { FILTER_CONDITION } from '#lib-shared/resource/utils/Filter/Filter.constants';
import { type FilterModel } from '#lib-shared/resource/utils/Filter/Filter.models';

export const ResourceFilterForm = <TType, TForm = undefined, TRoot = undefined>({
  filters,
  onSubmit,
  testID,
  ...props
}: SFCPropsModel<ResourceFilterFormPropsModel<TType, TForm, TRoot>>): ReactElement<
  SFCPropsModel<ResourceFilterFormPropsModel<TType, TForm, TRoot>>
> => {
  const { styles } = useStyles({ props });
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
    <FormContainer
      isFullWidth
      isHorizontal
      onSubmit={handleSubmit}
      rows={[
        {
          fields: filters?.map(({ id, type }) => ({
            element: (
              <ResourceFilterField<TType, TForm, TRoot>
                id={id}
                type={type}
              />
            ),
            id,
          })),
          id: 'row',
        },
      ]}
      style={styles}
      testID={testID}
    />
  );
};
