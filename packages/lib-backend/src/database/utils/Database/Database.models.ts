import type { DATABASE_TYPE } from '@lib/backend/database/utils/Database/Database.constants';
import type { CallablePromiseModel, ConstructorModel } from '@lib/shared/core/core.models';
import type { WithResourceNameModel } from '@lib/shared/resource/decorators/withResourceName/withResourceName.models';
import type {
  EntityResourceDataModel,
  EntityResourceModel,
} from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import type { ResourceServiceModel } from '@lib/shared/resource/utils/Resource/ResourceService/ResourceService.models';

export type DatabaseTypeModel = `${DATABASE_TYPE}`;

export interface DatabaseParamsModel {
  database: string;
  entities: Array<ConstructorModel<EntityResourceModel>>;
  host: string;
  password?: string;
  pool?: DatabaseConnectionPoolModel;
  type: DatabaseTypeModel;
  username?: string;
}

export interface DatabaseConnectionPoolModel {
  max?: number;
}

export interface DatabaseModel {
  close: CallablePromiseModel;
  getRepository<TType>(params: WithResourceNameModel): RepositoryModel<TType>;
  initialize: CallablePromiseModel;
}

export interface RepositoryModel<TType>
  extends ResourceServiceModel<TType, EntityResourceDataModel<TType>> {
  clear: CallablePromiseModel;
  count: CallablePromiseModel<number>;
}
