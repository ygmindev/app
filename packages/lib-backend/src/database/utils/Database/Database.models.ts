import type { DATABASE_TYPE } from '@lib/backend/database/utils/Database/Database.constants';
import type { ConstructorModel, PromiseModel } from '@lib/shared/core/core.models';
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
  close: PromiseModel;
  getRepository<TType>(params: WithResourceNameModel): RepositoryModel<TType>;
  initialize: PromiseModel;
}

export interface RepositoryModel<TType>
  extends ResourceServiceModel<TType, EntityResourceDataModel<TType>> {
  clear: PromiseModel;
  count: PromiseModel<number>;
}
