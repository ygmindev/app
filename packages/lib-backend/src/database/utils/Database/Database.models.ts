import type { DATABASE_TYPE } from '@lib/backend/database/utils/Database/Database.constants';
import type { ConstructorModel } from '@lib/shared/core/core.models';
import type { WithResourceNameModel } from '@lib/shared/resource/decorators/withResourceName/withResourceName.models';
import type { EntityResourceModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import type { ResourceServiceModel } from '@lib/shared/resource/utils/Resource/ResourceService/ResourceService.models';

export type DatabaseTypeModel = `${DATABASE_TYPE}`;

export interface DatabaseParamsModel {
  database: string;
  entities: Array<ConstructorModel<EntityResourceModel>>;
  host: string;
  password?: string;
  type: DatabaseTypeModel;
  username?: string;
}

export interface DatabaseModel {
  bootstrap(): Promise<void>;
  close(): Promise<void>;
  getRepository<TType>(params: WithResourceNameModel): RepositoryModel<TType>;
}

export interface RepositoryModel<TType> extends ResourceServiceModel<TType, TType> {
  clear(): Promise<void>;
  count(): Promise<number>;
}
