import type { AuthorizeParamsModel } from '@lib/backend/auth/utils/authorize/authorize.models';
import type { _ContainerModel } from '@lib/shared/core/utils/Container/_Container.models';

export interface _GraphqlConfigParamsModel {
  authorize: (params: AuthorizeParamsModel) => Promise<boolean>;
  container: _ContainerModel;
  resolverExtension: string;
  schemaPath: string;
}
