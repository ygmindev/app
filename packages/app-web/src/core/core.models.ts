import { type DatabaseModel } from '#lib-backend/database/utils/Database/Database.models';
import { type CleanUpParamsModel } from '#lib-shared/core/utils/cleanUp/cleanUp.models';

export type WebContextModel = CleanUpParamsModel & {
  database: DatabaseModel;
};
