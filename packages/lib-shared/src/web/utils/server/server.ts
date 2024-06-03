import { uri } from '@lib/shared/http/utils/uri/uri';
import { error, info } from '@lib/shared/logging/utils/Logger/Logger';
import { _server } from '@lib/shared/web/utils/server/_server';
import {
  type ServerModel,
  type ServerParamsModel,
} from '@lib/shared/web/utils/server/server.models';

export const server = async (params: ServerParamsModel): Promise<ServerModel> =>
  _server({
    ...params,
    onError: error,
    onStart: () => info(`Server running on ${uri({ host: params.host, port: params.port })}`),
  });
