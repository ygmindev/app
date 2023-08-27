import { type ReactElement } from 'react';

import { type SFCPropsModel } from '#lib-frontend/core/core.models';
import { FormContainer } from '#lib-frontend/data/components/FormContainer/FormContainer';
import { type ResourceFormPropsModel } from '#lib-frontend/resource/containers/ResourceForm/ResourceForm.models';
import { filterNil } from '#lib-shared/core/utils/filterNil/filterNil';
import { withId } from '#lib-shared/core/utils/withId/withId';
import { type EntityResourceModel } from '#lib-shared/resource/resources/EntityResource/EntityResource.models';

export const ResourceForm = <TType extends EntityResourceModel, TForm, TRoot = undefined>({
  columns,
  data,
  onCancel,
  onCreate,
  root,
  testID,
  validators,
}: SFCPropsModel<ResourceFormPropsModel<TType, TForm, TRoot>>): ReactElement<
  SFCPropsModel<ResourceFormPropsModel<TType, TForm, TRoot>>
> => {
  const handleSubmit = async (form: TForm): Promise<void> => {
    onCreate && (await onCreate({ form, root }));
  };

  return (
    <FormContainer
      initialValues={data}
      onCancel={onCancel}
      onSubmit={handleSubmit}
      rows={filterNil(
        withId(columns.map((column) => (data || !column.isDisabled) && { fields: [column] })),
      )}
      testID={testID}
      validators={validators}
    />
  );
};
