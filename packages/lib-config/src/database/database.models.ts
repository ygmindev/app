import type { _DatabaseConfigParamsModel } from '@lib/config/database/_database.models';
import type { DATABASE_TYPE } from '@lib/config/database/database.constants';

export type DatabaseTypeModel = `${DATABASE_TYPE}`;

export interface DatabaseConfigParamsModel extends _DatabaseConfigParamsModel {}

export interface DatabaseConnectionPoolModel {
  max: number;
}
