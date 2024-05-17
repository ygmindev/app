import {
  type _ServerModel,
  type _ServerParamsModel,
} from '@lib/backend/server/utils/server/_server.models';
import { handleCleanup } from '@lib/shared/core/utils/handleCleanup/handleCleanup';
import { debug, error, info, warn } from '@lib/shared/logging/utils/logger/logger';
import { fastify } from 'fastify';
import { createYoga } from 'graphql-yoga';

class _Logger {
  child = (..._: Array<unknown>): unknown => new _Logger();
  fatal = (..._: Array<unknown>): unknown => null;
  level = 'info';
  error = error;
  warn = warn;
  info = info;
  debug = debug;
  trace = (..._: Array<unknown>): unknown => null;
  silent = (..._: Array<unknown>): unknown => null;
}

export const _server = async ({}: _ServerParamsModel): Promise<_ServerModel> => {
  const app = fastify({ logger: new _Logger() });
  await handleCleanup({
    onCleanup: async () => {
      debug('close server');
      await app.close();
    },
  });

  const yoga = createYoga({ logging: { debug, error, info, warn } });

  app.get('/ping', async (req, rep) => {
    console.warn('ping');
    await rep.status(200).send('ping');
  });

  // app.route({
  //   handler: async (req, reply) => {
  //     const response = await yoga.handleNodeRequestAndResponse(req, reply, { reply, req });
  //     // response.headers.forEach((value, key) => {
  //     //   reply.header(key, value);
  //     // });
  //     // reply.status(response.status);
  //     // reply.send(response.body);
  //     return reply;
  //   },
  //   method: ['GET', 'POST', 'OPTIONS'],
  //   url: yoga.graphqlEndpoint,
  // });

  try {
    await app.listen({ port: 4000 });
  } catch (e) {
    error(e);
  }
};
