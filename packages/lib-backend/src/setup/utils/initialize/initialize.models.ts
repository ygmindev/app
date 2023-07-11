import { type DatabaseModel } from '#lib-backend/database/utils/Database/Database.models';

export type InitializeModel = Promise<{
  database: DatabaseModel;
}>;
