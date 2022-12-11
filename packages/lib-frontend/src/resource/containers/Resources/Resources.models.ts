import type { TableColumnModel } from '@lib/frontend/core/components/Table/Table.models';
import type { FormContainerFieldModel } from '@lib/frontend/form/containers/FormContainer/FormContainer.models';
import type { WithSubmitPropsModel } from '@lib/frontend/form/decorators/withSubmitProps/withSubmitProps.models';
import type { UseFormParamsModel } from '@lib/frontend/form/hooks/useForm/useForm.models';
import type { UseResourceMethodFieldsModel } from '@lib/frontend/resource/hooks/useResourceMethod/useResourceMethod.models';
import type { WithTestIdModel } from '@lib/frontend/testing/testing.models';
import type { WithResourceNameModel } from '@lib/shared/resource/decorators/withResourceName/withResourceName.models';
import type { RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
import type { EntityResourceModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import type { RootModel } from '@lib/shared/resource/utils/Root/Root.models';
import type { ComponentType } from 'react';

export interface ResourcesPropsModel<TType extends EntityResourceModel, TForm, TRoot = undefined>
  extends WithTestIdModel,
    WithResourceNameModel<TRoot>,
    Pick<UseFormParamsModel<TForm>, 'validators'>,
    RootModel<TRoot> {
  FormComponent?: ComponentType<WithSubmitPropsModel>;
  columns: Array<ResourcesColumnModel<TType>>;
  fields:
    | UseResourceMethodFieldsModel<RESOURCE_METHOD_TYPE.CREATE, TType>
    | UseResourceMethodFieldsModel<RESOURCE_METHOD_TYPE.GET, TType>
    | UseResourceMethodFieldsModel<RESOURCE_METHOD_TYPE.GET_CONNECTION, TType>;
  limit?: number;
}

export type ResourcesColumnModel<TType extends EntityResourceModel> = Pick<
  TableColumnModel<TType, unknown>,
  'id' | 'label' | 'formatter' | 'renderer' | 'isHidden' | 'sort'
> &
  FormContainerFieldModel;
