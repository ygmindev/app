import { type DatabaseModel } from '@lib/backend/database/utils/Database/Database.models';
import { type _DatabaseConfigModel } from '@lib/config/database/database.models';

export type InitializeParamsModel = {
  databaseConfig?: _DatabaseConfigModel;
};

export type InitializeModel = {
  database?: DatabaseModel;
};
