import type { DatabaseTypeModel } from '@lib/backend/database/database.models';
import type { CallablePromiseModel, ConstructorModel } from '@lib/shared/core/core.models';
import type { EntityResourceModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import type { Options } from '@mikro-orm/core/utils';
import type { MongoDriver } from '@mikro-orm/mongodb';

export interface _DatabaseConfigParamsModel {
  database: string;
  entities: Array<ConstructorModel<EntityResourceModel>>;
  host: string;
  password?: string;
  pool: {
    max: number;
  };
  type: DatabaseTypeModel;
  username?: string;
}

export type _DatabaseConfigModel = CallablePromiseModel<Options<MongoDriver>>;
