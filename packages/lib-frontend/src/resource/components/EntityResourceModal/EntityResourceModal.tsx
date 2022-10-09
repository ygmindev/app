import { Button } from '@lib/frontend/core/components/Button/Button';
import { ICON } from '@lib/frontend/core/components/Icon/Icon.constants';
import { Modal } from '@lib/frontend/core/components/Modal/Modal';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { FormContainer } from '@lib/frontend/core/containers/FormContainer/FormContainer';
import type { FormContainerRowModel } from '@lib/frontend/core/containers/FormContainer/FormContainer.models';
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
import { get } from 'lodash';
import type { ReactElement } from 'react';

export const EntityResourceModal = <TType extends EntityResourceModel, TForm>({
  columns,
  data,
  isOpen,
  name,
  onClose,
  testID,
}: EntityResourceModalPropsModel<TType, TForm>): ReactElement<
  EntityResourceModalPropsModel<TType, TForm>
> => {
  const { t } = useTranslation([CORE]);

  const { query: remove } = useResourceMethod<
    RESOURCE_METHOD_TYPE.REMOVE,
    EntityResourceModel,
    TForm
  >({ fields: [{ result: ['_id'] }], method: RESOURCE_METHOD_TYPE.REMOVE, name });

  const _handleSubmit = async (values: TType): Promise<void> => {
    warn(values);
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
        <FormContainer<TType | TForm | undefined>
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
          onClose={onClose}
          onSubmit={_handleSubmit}
          rows={withId(
            columns.map(
              ({ autoComplete, icon, id, isDisabled, isHidden, label, options, type }) => ({
                fields: [
                  isHidden && !get(data, id)
                    ? null
                    : {
                        autoComplete,
                        icon,
                        id,
                        isDisabled: isDisabled || isHidden,
                        label,
                        options,
                        type,
                      },
                ].filter(Boolean) as Array<FormContainerRowModel>,
              }),
            ),
          )}
        />
      </Wrapper>
    </Modal>
  );
};
