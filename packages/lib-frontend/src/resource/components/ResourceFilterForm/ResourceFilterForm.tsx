import isNil from 'lodash/isNil';
import reduce from 'lodash/reduce';
import { type ReactElement } from 'react';

import { type SFCPropsModel } from '#lib-frontend/core/core.models';
import { FormContainer } from '#lib-frontend/form/containers/FormContainer/FormContainer';
import { ResourceFilterField } from '#lib-frontend/resource/components/ResourceFilterField/ResourceFilterField';
import { type ResourceFilterFormPropsModel } from '#lib-frontend/resource/components/ResourceFilterForm/ResourceFilterForm.models';
import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';
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
    const filterData = reduce(
      filters,
      (result, filter) => {
        const value = data[filter.id];
        return isNil(value) ? result : { ...result, [filter.id]: value };
      },
      {} as FilterModel<TType>,
    );
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
