import type {
  DatabaseConnectionPoolModel,
  DatabaseTypeModel,
} from '@lib/backend/database/utils/Database/Database.models';
import type { ConstructorModel } from '@lib/shared/core/core.models';
import type { EntityResourceModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';

export interface _DatabaseConfigParamsModel {
  database: string;
  entities: Array<ConstructorModel<EntityResourceModel>>;
  host: string;
  password?: string;
  pool: DatabaseConnectionPoolModel;
  type: DatabaseTypeModel;
  username?: string;
}
