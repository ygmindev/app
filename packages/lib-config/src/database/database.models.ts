import { type Options } from '@mikro-orm/core/utils';
import { type MongoDriver } from '@mikro-orm/mongodb';

import { type DatabaseTypeModel } from '#lib-backend/database/database.models';
import { type ConfigDynamicModel } from '#lib-config/core/core.models';
import { type ClassModel, type EmptyObjectModel } from '#lib-shared/core/core.models';
import { type EntityResourceModel } from '#lib-shared/resource/resources/EntityResource/EntityResource.models';

export type DatabaseConfigOptionsModel = EmptyObjectModel;

export type DatabaseConfigModel = ConfigDynamicModel<
  {
    database: string;
    entities: Array<ClassModel<EntityResourceModel>>;
    host: string;
    password?: string;
    pool: { max: number };
    type: DatabaseTypeModel;
    username?: string;
  },
  DatabaseConfigOptionsModel
>;

export type _DatabaseConfigModel = ConfigDynamicModel<
  Options<MongoDriver>,
  DatabaseConfigOptionsModel
>;
