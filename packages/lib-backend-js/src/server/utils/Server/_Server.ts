import { joinPaths } from '@lib/backend/file/utils/joinPaths/joinPaths';
import { HttpRequest } from '@lib/backend/http/utils/HttpRequest/HttpRequest';
import { HttpResponse } from '@lib/backend/http/utils/HttpResponse/HttpResponse';
import {
  type _ServerModel,
  type _ServerParamsModel,
} from '@lib/backend/server/utils/Server/_Server.models';
import { type ApiConfigModel, type ApiEndpointModel } from '@lib/config/api/api.models';
import { type HTTP_METHOD, HTTP_STATUS_CODE } from '@lib/shared/http/http.constants';
import { logger } from '@lib/shared/logging/utils/Logger/Logger';
import { fastify, type FastifyInstance, type FastifyRequest, type HTTPMethods } from 'fastify';
import { readFileSync } from 'fs';
import { type I18NextRequest } from 'i18next-http-middleware';
import forEach from 'lodash/forEach';
import toNumber from 'lodash/toNumber';

export class _Server implements _ServerModel {
  protected _api?: ApiConfigModel;
  _app: FastifyInstance;
  protected _host: string;
  protected _port: number;

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

  async close(): Promise<void> {
    this._app.server.listening && (await this._app.close());
  }

  async register<TType, TParams>({
    handler,
    method,
    pathname,
    protocol,
  }: ApiEndpointModel<TType, TParams>): Promise<void> {
    await this._app.register(async (fastify) =>
      fastify.route({
        handler: async (req: FastifyRequest & I18NextRequest, rep) => {
          const request = new HttpRequest({
            body: req.body as TParams,
            cookies: req.cookies as Record<string, string>,
            headers: req.headers as Record<string, string>,
            i18n: req.i18n,
            lang: req.language,
            method: req.method as HTTP_METHOD,
            query: req.query as URLSearchParams,
            url: req.originalUrl ?? req.url,
          });
          const response = handler
            ? await handler(request, undefined, { rep, req })
            : new HttpResponse({ body: '' });
          forEach(response.headers, (v, k) => {
            void rep.header(k, v);
          });
          await rep.status(response.statusCode ?? HTTP_STATUS_CODE.OK).send(response.body);
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
}
