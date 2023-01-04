import { _server } from '@tool/task/framework/web/utils/server/_server';
import type {
  ServerModel,
  ServerParamsModel,
} from '@tool/task/framework/web/utils/server/server.models';

export const server = async (params: ServerParamsModel): Promise<ServerModel> => _server(params);
