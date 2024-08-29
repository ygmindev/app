import { _runServer } from '@lib/backend/server/utils/runServer/_runServer';
import {
  type RunServerModel,
  type RunServerParamsModel,
} from '@lib/backend/server/utils/runServer/runServer.models';

export const runServer = async ({ ...params }: RunServerParamsModel): Promise<RunServerModel> =>
  _runServer({ ...params });
