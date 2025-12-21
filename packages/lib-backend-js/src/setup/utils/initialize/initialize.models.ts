import { type DatabaseConfigModel } from '@lib/config/database/database.models';

export type InitializeParamsModel = {
  database?(): DatabaseConfigModel;
};

export type InitializeModel = void;
