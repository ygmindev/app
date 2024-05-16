import {
  type _ServerModel,
  type _ServerParamsModel,
} from '@lib/backend/server/utils/server/_server.models';
import { debug, error, info, warn } from '@lib/shared/logging/utils/logger/logger';
import { fastify } from 'fastify';
import { createYoga } from 'graphql-yoga';

export const _server = async ({}: _ServerParamsModel): Promise<_ServerModel> => {
  const app = fastify({
    logger: {
      debug,
      error,
      info,
      // TOOD: verbose
      level: 'info',
      warn,
    },
  });

  const yoga = createYoga({ logging: { debug, error, info, warn } });

  app.get('/ping', async (req, rep) => {
    console.warn('ping');
    await rep.status(200);
    await rep.send('ping');
  });

  app.route({
    handler: async (req, reply) => {
      const response = await yoga.handleNodeRequestAndResponse(req, reply, { reply, req });
      // response.headers.forEach((value, key) => {
      //   reply.header(key, value);
      // });
      // reply.status(response.status);
      // reply.send(response.body);
      return reply;
    },
    method: ['GET', 'POST', 'OPTIONS'],
    url: yoga.graphqlEndpoint,
  });

  try {
    await app.listen({ port: 4000 });
  } catch (e) {}
};
