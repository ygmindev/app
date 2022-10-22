import type { TableColumnModel } from '@lib/frontend/core/components/Table/Table.models';
import type { FormContainerFieldModel } from '@lib/frontend/form/containers/FormContainer/FormContainer.models';
import type { UseFormParamsModel } from '@lib/frontend/form/hooks/useForm/useForm.models';
import type { GraphQlFieldModel } from '@lib/frontend/graphql/utils/graphQlQuery/graphQlQuery.models';
import type { WithTestIdModel } from '@lib/frontend/testing/testing.models';
import type { WithResourceNameModel } from '@lib/shared/resource/decorators/withResourceName/withResourceName.models';
import type { RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
import type { EntityResourceModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import type { OutputModel } from '@lib/shared/resource/utils/Output/Output.models';

export interface EntityResourceTablePropsModel<TType extends EntityResourceModel, TForm>
  extends WithResourceNameModel,
    Pick<UseFormParamsModel<TForm>, 'validators'>,
    WithTestIdModel {
  columns: Array<EntityResourceTableColumnModel<TType>>;
  createFields: Array<GraphQlFieldModel<OutputModel<RESOURCE_METHOD_TYPE.CREATE, TType>>>;
  getConnectionFields: Array<
    GraphQlFieldModel<OutputModel<RESOURCE_METHOD_TYPE.GET_CONNECTION, TType>>
  >;
  limit?: number;
}

export type EntityResourceTableColumnModel<TType extends EntityResourceModel> = Pick<
  TableColumnModel<TType, unknown>,
  'id' | 'label' | 'formatter' | 'renderer' | 'isHidden' | 'sort'
> &
  FormContainerFieldModel;
