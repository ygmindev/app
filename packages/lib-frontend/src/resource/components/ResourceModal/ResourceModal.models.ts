import type { ModalPropsModel } from '@lib/frontend/core/components/Modal/Modal.models';
import type { RESOURCE_MODAL_MODE } from '@lib/frontend/resource/components/ResourceModal/ResourceModal.constants';
import type { ResourcesPropsModel } from '@lib/frontend/resource/components/Resources/Resources.models';
import type { WithTestIdModel } from '@lib/frontend/testing/testing.models';
import type { RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
import type { EntityResourceModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import type { InputModel } from '@lib/shared/resource/utils/Input/Input.models';
import type { OutputModel } from '@lib/shared/resource/utils/Output/Output.models';

export type ResourceModalModeModel = `${RESOURCE_MODAL_MODE}`;

export interface ResourceModalPropsModel<
  TType extends EntityResourceModel,
  TForm,
  TRoot = undefined,
> extends Pick<ResourcesPropsModel<TType, TForm, TRoot>, 'columns' | 'root' | 'validators'>,
    Pick<ModalPropsModel, 'isOpen' | 'onClose'>,
    WithTestIdModel {
  data?: TType;
  onCreate?(
    input: InputModel<RESOURCE_METHOD_TYPE.CREATE, TType, TForm, TRoot>,
  ): Promise<OutputModel<RESOURCE_METHOD_TYPE.CREATE, TType, TRoot>>;
}
