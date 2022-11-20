import { Modal } from '@lib/frontend/core/components/Modal/Modal';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { FormContainer } from '@lib/frontend/form/containers/FormContainer/FormContainer';
import type { ResourceModalPropsModel } from '@lib/frontend/resource/components/ResourceModal/ResourceModal.models';
import { withId } from '@lib/shared/core/decorators/withId/withId';
import type { EntityResourceModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import type { ReactElement } from 'react';

export const ResourceModal = <TType extends EntityResourceModel, TForm, TRoot = undefined>({
  columns,
  data,
  isOpen,
  onClose,
  onCreate,
  root,
  testID,
  validators,
}: ResourceModalPropsModel<TType, TForm, TRoot>): ReactElement<
  ResourceModalPropsModel<TType, TForm, TRoot>
> => {
  const _handleSubmit = async (form: TForm): Promise<void> => {
    onCreate && (await onCreate({ form, root }));
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}>
      <Wrapper testID={testID}>
        <FormContainer<TType | TForm>
          initialValues={data}
          onCancel={onClose}
          onSubmit={_handleSubmit}
          rows={withId(
            columns
              .map((column) => (data || !column.isDisabled) && { fields: [column] })
              .filter(Boolean),
          )}
          validators={validators}
        />
      </Wrapper>
    </Modal>
  );
};
