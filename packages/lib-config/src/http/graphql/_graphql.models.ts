import type { AuthorizeParamsModel } from '@lib/backend/auth/utils/authorize/authorize.models';
import type { ConstructorModel } from '@lib/shared/core/core.models';
import type { _ContainerModel } from '@lib/shared/core/utils/Container/_Container.models';

export interface _GraphqlConfigParamsModel {
  authorize: (params: AuthorizeParamsModel) => Promise<boolean>;
  container: _ContainerModel;
  resolvers: Array<ConstructorModel>;
  schemaPath: string;
}
