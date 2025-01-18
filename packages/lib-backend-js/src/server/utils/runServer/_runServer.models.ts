import { type ServerConfigModel } from '@lib/config/node/server/server.models';
import { type FastifyInstance } from 'fastify';

export type _RunServerParamsModel = ServerConfigModel & {
  onClose(): Promise<void>;
  onInitialize(): Promise<void>;
};

export type _RunServerModel = FastifyInstance;
