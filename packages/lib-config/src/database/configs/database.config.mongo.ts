import { _databaseConfig } from '@lib/config/database/_database';
import type { _DatabaseConfigModel } from '@lib/config/database/_database.models';
import { databaseConfigParamsMongo } from '@lib/config/database/params/database.params.mongo';

export const databaseConfigMongo: _DatabaseConfigModel = _databaseConfig(databaseConfigParamsMongo);
