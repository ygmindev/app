import { Modal } from '@lib/frontend/core/components/Modal/Modal';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { FormContainer } from '@lib/frontend/form/containers/FormContainer/FormContainer';
import type { EntityResourceModalPropsModel } from '@lib/frontend/resource/components/EntityResourceModal/EntityResourceModal.models';
import { withId } from '@lib/shared/core/decorators/withId/withId';
import type { EntityResourceModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import type { ReactElement } from 'react';

export const EntityResourceModal = <TType extends EntityResourceModel, TForm>({
  columns,
  data,
  isOpen,
  onClose,
  onCreate,
  testID,
  validators,
}: EntityResourceModalPropsModel<TType, TForm>): ReactElement<
  EntityResourceModalPropsModel<TType, TForm>
> => {
  const _handleSubmit = async (form: TForm): Promise<void> => {
    onCreate && (await onCreate({ form }));
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
