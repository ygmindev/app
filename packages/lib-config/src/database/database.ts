import { _databaseConfig } from '@lib/config/database/_database';
import { databaseConfig as config } from '@lib/config/database/configs/database.main';

export const databaseConfig = _databaseConfig(config);
