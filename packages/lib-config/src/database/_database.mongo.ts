import _databaseConfig from '@lib/config/database/_database';
import type { _DatabaseConfigModel } from '@lib/config/database/_database.models';
import databaseConfigMongo from '@lib/config/database/database.mongo';

const _databaseConfigMongo: _DatabaseConfigModel = _databaseConfig(databaseConfigMongo);

export default _databaseConfigMongo;
