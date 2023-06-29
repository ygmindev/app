import { _server } from '#lib-platform/web/utils/server/_server';
import {
  type ServerModel,
  type ServerParamsModel,
} from '#lib-platform/web/utils/server/server.models';

export const server = async (params: ServerParamsModel): ServerModel => _server(params);
