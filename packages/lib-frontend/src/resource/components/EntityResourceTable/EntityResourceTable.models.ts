import type { TableColumnModel } from '@lib/frontend/core/components/Table/Table.models';
import type { UseResourceMethodParamsModel } from '@lib/frontend/resource/hooks/useResourceMethod/useResourceMethod.models';
import type { WithTestIdModel } from '@lib/frontend/testing/testing.models';
import type { RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
import type { EntityResourceModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';

export interface EntityResourceTablePropsModel<TType extends EntityResourceModel, TForm>
  extends WithTestIdModel,
    Pick<
      UseResourceMethodParamsModel<RESOURCE_METHOD_TYPE.GET_CONNECTION, TType, TForm>,
      'name' | 'fields'
    > {
  columns: Array<TableColumnModel<TType, unknown>>;
  nrows?: number;
}
