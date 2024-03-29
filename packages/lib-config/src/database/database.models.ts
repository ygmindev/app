import { type DatabaseTypeModel } from '@lib/backend/database/database.models';
import { type ClassModel } from '@lib/shared/core/core.models';
import { type EntityResourceModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import { type Options } from '@mikro-orm/core/utils';
import { type MongoDriver } from '@mikro-orm/mongodb';

export type DatabaseConfigModel = {
  database?: string;
  entities: Array<ClassModel<EntityResourceModel>>;
  expireSeconds: number;
  host?: string;
  password?: string;
  pool: { max: number };
  type?: DatabaseTypeModel;
  username?: string;
};

export type _DatabaseConfigModel = Options<MongoDriver>;
