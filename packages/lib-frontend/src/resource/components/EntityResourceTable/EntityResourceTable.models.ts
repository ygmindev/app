import type { TableColumnModel } from '@lib/frontend/core/components/Table/Table.models';
import type { FormContainerFieldModel } from '@lib/frontend/core/containers/FormContainer/FormContainer.models';
import type { UseResourceMethodParamsModel } from '@lib/frontend/resource/hooks/useResourceMethod/useResourceMethod.models';
import type { WithTestIdModel } from '@lib/frontend/testing/testing.models';
import type { RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
import type { EntityResourceModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';

export interface EntityResourceTablePropsModel<TType extends EntityResourceModel, TForm>
  extends Pick<
      UseResourceMethodParamsModel<RESOURCE_METHOD_TYPE.GET_CONNECTION, TType, TForm>,
      'name' | 'fields'
    >,
    WithTestIdModel {
  columns: Array<EntityResourceTableColumnModel<TType>>;
  limit?: number;
}

export interface EntityResourceTableColumnModel<TType extends EntityResourceModel>
  extends Pick<
      TableColumnModel<TType, unknown>,
      'id' | 'label' | 'formatter' | 'renderer' | 'isHidden'
    >,
    FormContainerFieldModel {}
