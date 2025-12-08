import { joinPaths } from '@lib/backend/file/utils/joinPaths/joinPaths';
import { _Server } from '@lib/backend/server/utils/Server/_Server';
import { type ServerPluginModel } from '@lib/backend/server/utils/Server/plugins/plugins.models';
import {
  type ServerModel,
  type ServerParamsModel,
} from '@lib/backend/server/utils/Server/Server.models';
import { type ApiEndpointModel } from '@lib/config/api/api.models';
import { handleCleanup } from '@lib/shared/core/utils/handleCleanup/handleCleanup';
import { isArray } from '@lib/shared/core/utils/isArray/isArray';
import { uri } from '@lib/shared/http/utils/uri/uri';
import { logger } from '@lib/shared/logging/utils/Logger/Logger';
import isString from 'lodash/isString';

export class Server<TParams extends Array<unknown>> extends _Server implements ServerModel {
  _onClose: (() => Promise<void>) | undefined;
  _onInitialize: (() => Promise<void>) | undefined;
  _plugins?: Array<[ServerPluginModel<TParams[number]>, TParams[number]]>;

  constructor({ onClose: onClose, onInitialize, plugins, ...params }: ServerParamsModel<TParams>) {
    super(params);
    this._plugins = plugins;
    this._onClose = onClose?.bind(this);
    this._onInitialize = onInitialize?.bind(this);
    this.register = this.register.bind(this);
    this.run = this.run.bind(this);
    this.close = this.close.bind(this);
  }

  async close(): Promise<void> {
    await this._onClose?.();
    await super.close();
  }

  async register<TType, TParams>(params: ApiEndpointModel<TType, TParams>): Promise<void> {
    const prefix = isString(params.prefix)
      ? params.prefix
      : params.prefix
        ? this._api?.prefix
        : undefined;

    const pathname = `/${joinPaths([prefix, params.pathname])}`;

    logger.info(
      `${isArray(params.method) ? params.method.join(',') : params.method} ${uri({
        host: this._host,
        port: this._port,
      })}${pathname}`,
    );

    return super.register({ ...params, pathname, prefix });
  }

  async run(): Promise<void> {
    await this._onInitialize?.();

    await handleCleanup({ onCleanUp: this.close });

    for (const [plugin, params] of this._plugins ?? []) {
      await plugin(this, params);
    }

    for (const route of this._api?.routes ?? []) {
      await this.register(route);
    }

    await super.run();
  }
}
