import { Button } from '@lib/frontend/core/components/Button/Button';
import { Modal } from '@lib/frontend/core/components/Modal/Modal';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { ICON } from '@lib/frontend/core/decorators/withIconProps/withIconProps.constants';
import { FormContainer } from '@lib/frontend/form/containers/FormContainer/FormContainer';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import type { EntityResourceModalPropsModel } from '@lib/frontend/resource/components/EntityResourceModal/EntityResourceModal.models';
import { useResourceMethod } from '@lib/frontend/resource/hooks/useResourceMethod/useResourceMethod';
import { THEME_COLOR } from '@lib/frontend/styling/utils/theme/theme.constants';
import { CORE } from '@lib/shared/core/core.constants';
import { withId } from '@lib/shared/core/decorators/withId/withId';
import { warn } from '@lib/shared/logging/utils/logger/logger';
import { RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
import type { EntityResourceModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import type { FilterModel } from '@lib/shared/resource/utils/Filter/Filter.models';
import type { ReactElement } from 'react';

export const EntityResourceModal = <TType extends EntityResourceModel, TForm>({
  columns,
  data,
  isOpen,
  name,
  onClose,
  onCreate,
  testID,
  validators,
}: EntityResourceModalPropsModel<TType, TForm>): ReactElement<
  EntityResourceModalPropsModel<TType, TForm>
> => {
  const { t } = useTranslation([CORE]);

  const { query: remove } = useResourceMethod<
    RESOURCE_METHOD_TYPE.REMOVE,
    EntityResourceModel,
    TForm
  >({ fields: [{ result: ['_id'] }], method: RESOURCE_METHOD_TYPE.REMOVE, name });

  const _handleSubmit = async (values: TForm): Promise<void> => {
    if (onCreate) {
      const result = await onCreate({ form: values });
      warn(result);
    }
  };

  const _handleDelete = async (): Promise<void> => {
    data && (await remove({ filter: { _id: data._id } as FilterModel<TType> }));
    onClose && onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}>
      <Wrapper testID={testID}>
        <FormContainer<TType | TForm>
          initialValues={data}
          leftElement={
            data && (
              <Button
                color={THEME_COLOR.ERROR}
                confirmMessage={t('core:messages.confirmRemove')}
                icon={ICON.timesCircle}
                onPress={_handleDelete}>
                {t('core:labels.remove')}
              </Button>
            )
          }
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
