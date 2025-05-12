import { joinPaths } from '@lib/backend/file/utils/joinPaths/joinPaths';
import { _Server } from '@lib/backend/server/utils/Server/_Server';
import { type ServerPluginModel } from '@lib/backend/server/utils/Server/plugins/plugins.models';
import {
  type ServerModel,
  type ServerParamsModel,
} from '@lib/backend/server/utils/Server/Server.models';
import { type ApiEndpointModel } from '@lib/config/api/api.models';
import { isArray } from '@lib/shared/core/utils/isArray/isArray';
import { uri } from '@lib/shared/http/utils/uri/uri';
import { logger } from '@lib/shared/logging/utils/Logger/Logger';

export class Server<TParams extends Array<unknown>> extends _Server implements ServerModel {
  _plugins?: Array<[ServerPluginModel<TParams[number]>, TParams[number]]>;

  constructor({ plugins, ...params }: ServerParamsModel<TParams>) {
    super(params);
    this._plugins = plugins;
  }

  async register<TType, TParams>(params: ApiEndpointModel<TType, TParams>): Promise<void> {
    const pathname = `/${joinPaths([this._api.prefix, params.pathname])}`;
    logger.info(
      `${isArray(params.method) ? params.method.join(',') : params.method} ${uri({
        host: this._host,
        port: this._port,
      })}${pathname}`,
    );
    return super.register({ ...params, pathname });
  }

  async run(): Promise<void> {
    for (const [plugin, params] of this._plugins ?? []) {
      await plugin(this, params);
    }
    await super.run();
  }
}
