import { joinPaths } from '@lib/backend/file/utils/joinPaths/joinPaths';
import {
  type _ServerModel,
  type _ServerParamsModel,
} from '@lib/backend/server/utils/Server/_Server.models';
import { API_ENDPOINT_TYPE } from '@lib/config/api/api.constants';
import { isArray } from '@lib/shared/core/utils/isArray/isArray';
import { uri } from '@lib/shared/http/utils/uri/uri';
import { logger } from '@lib/shared/logging/utils/Logger/Logger';
import { fastify, type FastifyInstance, type HTTPMethods, type RouteOptions } from 'fastify';
import { readFileSync } from 'fs';
import toNumber from 'lodash/toNumber';

export class _Server implements _ServerModel {
  protected _app: FastifyInstance;
  private _port: number;
  private _host: string;

  constructor({ api, certificate, cors, host, port }: _ServerParamsModel) {
    this._host = host;
    this._port = port;

    const { certificateDir, privateKeyFilename, publicKeyFilename } = certificate;
    this._app = fastify({
      disableRequestLogging: true,
      https: {
        cert: readFileSync(joinPaths([certificateDir, publicKeyFilename])),
        key: readFileSync(joinPaths([certificateDir, privateKeyFilename])),
      },
    });

    api.routes.forEach(({ handler, method, pathname, protocol, schema, type }) => {
      const url = `/${joinPaths([api.prefix, pathname])}`;
      logger.info(
        `${isArray(method) ? method.join(',') : method} ${uri({
          host: this._host,
          port: this._port,
        })}${url}`,
      );

      const route: RouteOptions = {
        handler: async (req, reply) => {
          const { body, status } = handler
            ? await handler({ body: req.body })
            : { body: '', status: 200 };
          await reply.status(status ?? 200).send(body);
        },
        method: method as HTTPMethods,
        url,
      };

      if (type === API_ENDPOINT_TYPE.GRAPHQL) {
        try {
          const schemaF = schema && _graphql(schema);
          const yoga = createYoga<{ reply: FastifyReply; req: FastifyRequest }>({
            context: async ({ request }) => {
              const context: RequestContextModel = {};
              const access = request.headers.get('authorization');
              access && (context.token = { access });
              // TODO: delete token if expired token
              // request.headers.delete('authorization');
              return context;
            },
            landingPage: false,
            logging: logger,
            maskedErrors: {
              maskError(error, message, isDev) {
                return formatGraphqlError(error as GraphQLError);
              },
            },
            plugins: filterNil([protocol !== HTTP_PROTOCOL.WEBSOCKET && useGraphQLSSE]),
            schema: schemaF,
          });

          switch (protocol) {
            case HTTP_PROTOCOL.WEBSOCKET: {
              route.wsHandler = makeHandler({ schema: schemaF });
              break;
            }
            default: {
              route.handler = async (req, reply) => {
                const response = await yoga.handleNodeRequestAndResponse(req, reply, {
                  reply,
                  req,
                });
                response.headers.forEach((value: unknown, key: string) => {
                  void reply.header(key, value);
                });
                await reply.status(response.status ?? 200).send(response.body);
              };
              break;
            }
          }
        } catch (e) {
          console.warn(e);
        }
      }

      this._app.register(async (fastify) => fastify.route(route));
    });
  }

  async run(): Promise<void> {
    try {
      await this._app.listen({ port: toNumber(this._port) });
    } catch (e) {
      logger.error(e);
    }
  }

  async close(): Promise<void> {
    this._app.server.listening && (await this._app.close());
  }
}
