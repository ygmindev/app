import { joinPaths } from '@lib/backend/file/utils/joinPaths/joinPaths';
import {
  type _ServerModel,
  type _ServerParamsModel,
} from '@lib/backend/server/utils/Server/_Server.models';
import { type ApiConfigModel, type ApiEndpointModel } from '@lib/config/api/api.models';
import { HTTP_STATUS_CODE } from '@lib/shared/http/http.constants';
import { logger } from '@lib/shared/logging/utils/Logger/Logger';
import { fastify, type FastifyInstance, type HTTPMethods } from 'fastify';
import { readFileSync } from 'fs';
import toNumber from 'lodash/toNumber';

export class _Server implements _ServerModel {
  _app: FastifyInstance;

  protected _port: number;
  protected _host: string;
  protected _api: ApiConfigModel;

  constructor({ api, certificate, host, port }: _ServerParamsModel) {
    this._host = host;
    this._port = port;
    this._api = api;

    const { certificateDir, privateKeyFilename, publicKeyFilename } = certificate;
    this._app = fastify({
      disableRequestLogging: true,
      https: {
        cert: readFileSync(joinPaths([certificateDir, publicKeyFilename])),
        key: readFileSync(joinPaths([certificateDir, privateKeyFilename])),
      },
    });
  }

  async register<TType, TParams>({
    handler,
    method,
    pathname,
    protocol,
  }: ApiEndpointModel<TType, TParams>): Promise<void> {
    await this._app.register(async (fastify) =>
      fastify.route({
        handler: async (req, rep) => {
          const { body, headers, status } = handler
            ? await handler({ body: req.body as TParams }, undefined, { rep, req })
            : { body: '', status: HTTP_STATUS_CODE.OK };

          headers?.forEach((v, k) => {
            void rep.header(v, k);
          });

          await rep.status(status ?? HTTP_STATUS_CODE.OK).send(body);
        },
        method: method as HTTPMethods,
        url: pathname,
      }),
    );
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
