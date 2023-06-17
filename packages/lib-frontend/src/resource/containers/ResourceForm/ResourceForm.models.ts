import type { SubmittablePropsModel } from '#lib-frontend/form/form.models';
import type { RESOURCE_FORM_MODE } from '#lib-frontend/resource/containers/ResourceForm/ResourceForm.constants';
import type { ResourcesPropsModel } from '#lib-frontend/resource/containers/Resources/Resources.models';
import type { RESOURCE_METHOD_TYPE } from '#lib-shared/resource/resource.constants';
import type { EntityResourceModel } from '#lib-shared/resource/resources/EntityResource/EntityResource.models';
import type { InputModel } from '#lib-shared/resource/utils/Input/Input.models';
import type { OutputModel } from '#lib-shared/resource/utils/Output/Output.models';

export type ResourceFormModeModel = `${RESOURCE_FORM_MODE}`;

export type ResourceFormPropsModel<TType extends EntityResourceModel, TForm, TRoot = undefined> = {
  data?: TType;
  onCreate?(
    input: InputModel<RESOURCE_METHOD_TYPE.CREATE, TType, TForm, TRoot>,
  ): Promise<OutputModel<RESOURCE_METHOD_TYPE.CREATE, TType, TRoot>>;
} & SubmittablePropsModel &
  Pick<ResourcesPropsModel<TType, TForm, TRoot>, 'columns' | 'root' | 'validators'>;
