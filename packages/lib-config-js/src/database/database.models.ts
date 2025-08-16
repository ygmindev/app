import { type DATABASE_TYPE } from '@lib/backend/database/database.constants';
import { type EntityResourceModel } from '@lib/model/resource/EntityResource/EntityResource.models';
import { type ClassModel } from '@lib/shared/core/core.models';
import { type Options } from '@mikro-orm/core';
import { type MongoDriver } from '@mikro-orm/mongodb';

export type DatabaseConfigModel = {
  database?: string;

  entities: Array<ClassModel<EntityResourceModel>>;

  expireSeconds: number;

  host?: string;

  password?: string;

  pool: { max: number };

  resourcePostfix: string;

  type?: DATABASE_TYPE;

  username?: string;
};

export type _DatabaseConfigModel = Options<MongoDriver>;
