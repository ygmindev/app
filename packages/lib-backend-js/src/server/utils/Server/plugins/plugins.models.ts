import { type FastifyInstance } from 'fastify';

export type _ServerPluginModel<TType> = (app: FastifyInstance, params: TType) => Promise<void>;
