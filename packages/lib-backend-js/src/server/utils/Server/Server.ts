import { joinPaths } from '@lib/backend/file/utils/joinPaths/joinPaths';
import { _Server } from '@lib/backend/server/utils/Server/_Server';
import { type ServerPluginModel } from '@lib/backend/server/utils/Server/plugins/plugins.models';
import {
  type ServerModel,
  type ServerParamsModel,
} from '@lib/backend/server/utils/Server/Server.models';
import { API_ENDPOINT_TYPE } from '@lib/config/api/api.constants';
import { type ApiEndpointModel } from '@lib/config/api/api.models';
import { handleCleanup } from '@lib/shared/core/utils/handleCleanup/handleCleanup';
import { handleHmr } from '@lib/shared/core/utils/handleHmr/handleHmr';
import { isArray } from '@lib/shared/core/utils/isArray/isArray';
import { uri } from '@lib/shared/http/utils/uri/uri';
import { logger } from '@lib/shared/logging/utils/Logger/Logger';

export class Server<TParams extends Array<unknown>> extends _Server implements ServerModel {
  _plugins?: Array<[ServerPluginModel<TParams[number]>, TParams[number]]>;
  _onInitialize: (() => Promise<void>) | undefined;
  _onClose: (() => Promise<void>) | undefined;

  constructor({ onClose: onClose, onInitialize, plugins, ...params }: ServerParamsModel<TParams>) {
    super(params);
    this._plugins = plugins;
    this._onClose = onClose;
    this._onInitialize = onInitialize;
  }

  async register<TType, TParams>(params: ApiEndpointModel<TType, TParams>): Promise<void> {
    const pathname = `/${joinPaths([this._api?.prefix, params.pathname])}`;
    logger.info(
      `${isArray(params.method) ? params.method.join(',') : params.method} ${uri({
        host: this._host,
        port: this._port,
      })}${pathname}`,
    );
    return super.register({ ...params, pathname });
  }

  async handleClose(): Promise<void> {
    await this._onClose?.();
    await this.close();
  }

  async run(): Promise<void> {
    handleHmr({ onChange: this.handleClose });

    await handleCleanup({ onCleanUp: this.handleClose });

    for (const [plugin, params] of this._plugins ?? []) {
      await plugin(this, params);
    }

    for (const route of this._api?.routes ?? []) {
      // graphql routes are handled by graphqlPlugin
      route.type !== API_ENDPOINT_TYPE.GRAPHQL && (await this.register(route));
    }

    await this._onInitialize?.();
    await super.run();
  }

  async close(): Promise<void> {
    await super.close();
  }
}
