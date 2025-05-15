import { type ServerParamsModel } from '@lib/backend/server/utils/Server/Server.models';

export type ServerConfigModel = ServerParamsModel<Array<unknown>> & {
  entryPathname: string;
};
