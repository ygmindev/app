import { uri } from '@lib/shared/http/utils/uri/uri';
import { logger } from '@lib/shared/logging/utils/Logger/Logger';
import { _runServer } from '@lib/shared/web/utils/runServer/_runServer';
import {
  type RunServerModel,
  type RunServerParamsModel,
} from '@lib/shared/web/utils/runServer/runServer.models';

export const runServer = async (params: RunServerParamsModel): Promise<RunServerModel> =>
  _runServer({
    ...params,
    onStart: () =>
      logger.info(`Server running on ${uri({ host: params.host, port: params.port })}`),
  });
