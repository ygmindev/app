import { joinPaths } from '@lib/backend/file/utils/joinPaths/joinPaths';
import { _Server } from '@lib/backend/server/utils/Server/_Server';
import { type ServerPluginModel } from '@lib/backend/server/utils/Server/plugins/plugins.models';
import {
  type ServerModel,
  type ServerParamsModel,
} from '@lib/backend/server/utils/Server/Server.models';
import { initialize } from '@lib/backend/setup/utils/initialize/initialize';
import { type ApiEndpointModel } from '@lib/config/api/api.models';
import { type DatabaseConfigModel } from '@lib/config/database/database.models';
import { isArray } from '@lib/shared/core/utils/isArray/isArray';
import { uri } from '@lib/shared/http/utils/uri/uri';
import { logger } from '@lib/shared/logging/utils/Logger/Logger';
import isString from 'lodash/isString';

export class Server<TParams extends Array<unknown>> extends _Server implements ServerModel {
  _database?: DatabaseConfigModel;
  _plugins?: Array<[ServerPluginModel<TParams[number]>, TParams[number]]>;

  constructor({ database, plugins, ...params }: ServerParamsModel<TParams>) {
    super(params);
    this._database = database;
    this._plugins = plugins;
  }

  async onInitialize(): Promise<void> {
    const database = this._database;
    database && (await initialize({ database: () => database }));
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
    await this.initialize?.();

    for (const [plugin, params] of this._plugins ?? []) {
      await plugin(this, params);
    }

    for (const route of this._api?.routes ?? []) {
      await this.register(route);
    }

    await super.run();
  }
}
