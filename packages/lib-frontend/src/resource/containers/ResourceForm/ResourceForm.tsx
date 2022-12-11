import { FormContainer } from '@lib/frontend/form/containers/FormContainer/FormContainer';
import type { ResourceFormPropsModel } from '@lib/frontend/resource/containers/ResourceForm/ResourceForm.models';
import { withId } from '@lib/shared/core/decorators/withId/withId';
import type { EntityResourceModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import type { ReactElement } from 'react';

export const ResourceForm = <TType extends EntityResourceModel, TForm, TRoot = undefined>({
  columns,
  data,
  onCancel,
  onCreate,
  root,
  testID,
  validators,
}: ResourceFormPropsModel<TType, TForm, TRoot>): ReactElement<
  ResourceFormPropsModel<TType, TForm, TRoot>
> => {
  const _handleSubmit = async (form: TForm): Promise<void> => {
    onCreate && (await onCreate({ form, root }));
  };

  return (
    <FormContainer<TType | TForm>
      initialValues={data}
      onCancel={onCancel}
      onSubmit={_handleSubmit}
      rows={withId(
        columns
          .map((column) => (data || !column.isDisabled) && { fields: [column] })
          .filter(Boolean),
      )}
      testID={testID}
      validators={validators}
    />
  );
};
