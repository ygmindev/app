import middie from '@fastify/middie';
import { joinPaths } from '@lib/backend/file/utils/joinPaths/joinPaths';
import { HttpRequest } from '@lib/backend/http/utils/HttpRequest/HttpRequest';
import { HttpResponse } from '@lib/backend/http/utils/HttpResponse/HttpResponse';
import { type HttpResponseModel } from '@lib/backend/http/utils/HttpResponse/HttpResponse.models';
import {
  type _ServerModel,
  type _ServerParamsModel,
} from '@lib/backend/server/utils/Server/_Server.models';
import { type ApiConfigModel, type ApiEndpointModel } from '@lib/config/api/api.models';
import { timeit } from '@lib/shared/core/utils/timeit/timeit';
import { DateTime } from '@lib/shared/datetime/utils/DateTime/DateTime';
import { type HTTP_METHOD, HTTP_STATUS_CODE } from '@lib/shared/http/http.constants';
import { type I18nModel } from '@lib/shared/locale/locale.models';
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
  protected _port?: number;

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
    this._app.register(middie);
  }

  async close(): Promise<void> {
    if (this._app.server.listening) {
      logger.progress('server closing...');
      await this._app.close();
      logger.success('server closed');
    }
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
            i18n: req.i18n as I18nModel,
            id: req.id,
            lang: req.language,
            method: req.method as HTTP_METHOD,
            query: req.query as URLSearchParams,
            url: req.originalUrl ?? req.url,
          });

          const handleRequest = async (): Promise<HttpResponseModel<TType | string>> => {
            const response = handler
              ? await handler(request, undefined, { rep, req })
              : new HttpResponse({ body: '' });
            forEach(response.headers, (v, k) => {
              void rep.header(k, v);
            });
            return response;
          };

          const [r, duration] = await timeit(handleRequest, false);
          const status = r.statusCode ?? HTTP_STATUS_CODE.OK;
          logger.info({
            duration: duration.toFixed(5),
            id: request.id,
            method: request.method,
            status,
            timestamp: new DateTime(),
            url: request.url,
          });

          await rep.status(status).send(r.body);
        },

        method: method as HTTPMethods,
        url: pathname,
      }),
    );
  }

  async run(): Promise<void> {
    try {
      if (this._app.server.listening) {
        logger.warn('server already running...');
      } else {
        logger.progress('server running...');
        await this._app.listen({ port: toNumber(this._port) });
        logger.success(`server listening on ${this._host}:${this._port}`);
      }
    } catch (e) {
      logger.error(e);
    }
  }
}
