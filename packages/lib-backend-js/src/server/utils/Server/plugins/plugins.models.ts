import { type ServerModel } from '@lib/backend/server/utils/Server/Server.models';

export type ServerPluginModel<TType> = (server: ServerModel, params: TType) => Promise<void>;
