import { type ReactElement } from 'react';

import { type SFCPropsModel } from '#lib-frontend/core/core.models';
import { FormContainer } from '#lib-frontend/form/containers/FormContainer/FormContainer';
import { ResourceFilterField } from '#lib-frontend/resource/components/ResourceFilterField/ResourceFilterField';
import { type ResourceFilterFormPropsModel } from '#lib-frontend/resource/components/ResourceFilterForm/ResourceFilterForm.models';
import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';

export const ResourceFilterForm = <TType, TForm = undefined, TRoot = undefined>({
  filters,
  testID,
  ...props
}: SFCPropsModel<ResourceFilterFormPropsModel<TType, TForm, TRoot>>): ReactElement<
  SFCPropsModel<ResourceFilterFormPropsModel<TType, TForm, TRoot>>
> => {
  const { styles } = useStyles({ props });
  return filters ? (
    <FormContainer
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
  ) : (
    <></>
  );
};
