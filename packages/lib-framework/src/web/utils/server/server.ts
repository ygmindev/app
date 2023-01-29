import { _server } from '@lib/framework/web/utils/server/_server';
import type { ServerModel, ServerParamsModel } from '@lib/framework/web/utils/server/server.models';

export const server = async (params: ServerParamsModel): Promise<ServerModel> => _server(params);
