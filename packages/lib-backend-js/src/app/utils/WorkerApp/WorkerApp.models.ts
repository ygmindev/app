import { type AppModel, type AppParamsModel } from '@lib/backend/app/utils/App/App.models';
import { type DatabaseConfigModel } from '@lib/config/database/database.models';

export type WorkerAppParamsModel = AppParamsModel & {
  count?: number;
  database(): DatabaseConfigModel;
};

export type WorkerAppModel = AppModel;
