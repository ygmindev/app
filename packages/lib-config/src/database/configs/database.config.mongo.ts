import { _databaseConfig } from '@lib/config/database/_database';
import type { _DatabaseConfigModel } from '@lib/config/database/_database.models';
import databaseConfigParams from '@lib/config/database/params/database.params.mongo';

const databaseConfig: _DatabaseConfigModel = _databaseConfig(databaseConfigParams);

export default databaseConfig;
