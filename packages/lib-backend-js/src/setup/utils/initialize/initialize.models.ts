import { type DatabaseModel } from '@lib/backend/database/utils/Database/Database.models';
import { type DatabaseConfigModel } from '@lib/config/database/database.models';

export type InitializeParamsModel = {
  database?: DatabaseConfigModel;
};

export type InitializeModel = {
  database?: DatabaseModel;

  cleanUp?(): Promise<void>;
};
