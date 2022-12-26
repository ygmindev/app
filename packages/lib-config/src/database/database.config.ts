import { _databaseConfig } from '@lib/config/database/_database.config';
import { databaseConfig as config } from '@lib/config/database/configs/database.config';

export const databaseConfig = _databaseConfig(config);
