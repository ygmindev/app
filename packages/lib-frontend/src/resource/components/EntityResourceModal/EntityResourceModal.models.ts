import type { ModalPropsModel } from '@lib/frontend/core/components/Modal/Modal.models';
import type { ENTITY_RESOURCE_MODAL_MODE } from '@lib/frontend/resource/components/EntityResourceModal/EntityResourceModal.constants';
import type { EntityResourceTablePropsModel } from '@lib/frontend/resource/components/EntityResourceTable/EntityResourceTable.models';
import type { WithTestIdModel } from '@lib/frontend/testing/testing.models';
import type { EntityResourceModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';

export type EntityResourceModalModeModel = `${ENTITY_RESOURCE_MODAL_MODE}`;

export interface EntityResourceModalPropsModel<TType extends EntityResourceModel, TForm>
  extends Pick<EntityResourceTablePropsModel<TType, TForm>, 'name' | 'columns' | 'validators'>,
    Pick<ModalPropsModel, 'isOpen' | 'onClose'>,
    WithTestIdModel {
  data?: TType;
}
