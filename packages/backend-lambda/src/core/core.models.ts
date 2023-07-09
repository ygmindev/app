import { type Handler } from 'aws-lambda';

import { type DatabaseModel } from '#lib-backend/database/utils/Database/Database.models';
import { type CleanUpParamsModel } from '#lib-shared/core/utils/cleanUp/cleanUp.models';

export type LambdaContextModel = CleanUpParamsModel & {
  database: DatabaseModel;
  handler: Handler;
};
