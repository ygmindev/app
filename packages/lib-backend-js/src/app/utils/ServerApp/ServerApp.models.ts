import { type AppModel, type AppParamsModel } from '@lib/backend/app/utils/App/App.models';
import { type DatabaseConfigModel } from '@lib/config/database/database.models';
import { type ServerConfigModel } from '@lib/config/node/server/server.models';

export type ServerAppParamsModel = AppParamsModel & {
  database(): DatabaseConfigModel;
  server(): ServerConfigModel;
};

export type ServerAppModel = AppModel;
