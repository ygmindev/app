import type { Options } from '@mikro-orm/core/utils';
import type { MongoDriver } from '@mikro-orm/mongodb';

import type { DatabaseTypeModel } from '#lib-backend/database/database.models';
import type { ConfigDynamicModel } from '#lib-config/core/core.models';
import type { ConstructorModel } from '#lib-shared/core/core.models';
import type { EntityResourceModel } from '#lib-shared/resource/resources/EntityResource/EntityResource.models';

export type DatabaseConfigModel = ConfigDynamicModel<{
  database: string;
  entities: Array<ConstructorModel<EntityResourceModel>>;
  host: string;
  password?: string;
  pool: { max: number };
  type: DatabaseTypeModel;
  username?: string;
}>;

export type _DatabaseConfigModel = ConfigDynamicModel<Options<MongoDriver>>;
