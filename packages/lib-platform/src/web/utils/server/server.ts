import { _server } from 'packages/lib-platform/src/web/utils/server/_server';
import type { ServerModel, ServerParamsModel } from '@lib/platform/web/utils/server/server.models';

export const server = async (params: ServerParamsModel): ServerModel => _server(params);
