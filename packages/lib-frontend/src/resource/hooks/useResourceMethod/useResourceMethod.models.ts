import type { GraphQlFieldModel } from '@lib/frontend/graphql/utils/graphQlQuery/graphQlQuery.models';
import type { WithResourceNameModel } from '@lib/shared/resource/decorators/withResourceName/withResourceName.models';
import type { RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
import type { ResourceMethodTypeModel } from '@lib/shared/resource/resource.models';
import type { InputModel } from '@lib/shared/resource/utils/Input/Input.models';
import type { OutputModel } from '@lib/shared/resource/utils/Output/Output.models';
import type {
  ResourceServiceAfterDecoratorModel,
  ResourceServiceBeforeDecoratorModel,
} from '@lib/shared/resource/utils/Resource/ResourceService/ResourceService.models';

export type UseResourceMethodParamsModel<
  TMethod extends ResourceMethodTypeModel,
  TType,
  TForm,
  TRoot = undefined,
> = WithResourceNameModel<TRoot> & {
  after?: ResourceServiceAfterDecoratorModel<TMethod, TType, TRoot>;
  before?: ResourceServiceBeforeDecoratorModel<
    TMethod,
    TMethod extends RESOURCE_METHOD_TYPE.CREATE ? TForm : TType,
    TRoot
  >;
  fields: Array<GraphQlFieldModel<OutputModel<TMethod, TType, TRoot>>>;
  method: TMethod;
};

export interface UseResourceMethodModel<
  TMethod extends ResourceMethodTypeModel,
  TType,
  TForm,
  TRoot = undefined,
> {
  isLoading: boolean;
  query(
    input: InputModel<TMethod, TMethod extends RESOURCE_METHOD_TYPE.CREATE ? TForm : TType, TRoot>,
  ): Promise<OutputModel<TMethod, TType, TRoot>>;
}
