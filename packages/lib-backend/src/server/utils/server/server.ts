import { _server } from '@lib/backend/server/utils/server/_server';
import {
  type ServerModel,
  type ServerParamsModel,
} from '@lib/backend/server/utils/server/server.models';

export const server = async ({ ...params }: ServerParamsModel): Promise<ServerModel> =>
  _server({ ...params });
