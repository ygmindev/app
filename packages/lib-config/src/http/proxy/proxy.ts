import { defineConfig } from '#lib-config/core/utils/defineConfig/defineConfig';
import { _proxy } from '#lib-config/http/proxy/_proxy';
import { PROXY_HANDLER } from '#lib-config/http/proxy/proxy.constants';
import { type ProxyConfigModel } from '#lib-config/http/proxy/proxy.models';
import { uri } from '#lib-shared/http/utils/uri/uri';

const { _config, config } = defineConfig({
  _config: _proxy,

  config: () =>
    ({
      listen: [80, 443],
      routes: [
        {
          match: ['/api/*'],
          to: {
            handler: PROXY_HANDLER.REVERSE_PROXY,
            pathname: uri({ host: process.env.SERVER_HOST, port: process.env.SERVER_PORT }),
          },
        },
        {
          match: ['/ws/*'],
          to: {
            handler: PROXY_HANDLER.REVERSE_PROXY,
            pathname: uri({
              host: process.env.SERVER_WEBSOCKET_HOST,
              port: process.env.SERVER_WEBSOCKET_PORT,
            }),
          },
        },
        {
          match: ['/*'],
          to: {
            handler: PROXY_HANDLER.REVERSE_PROXY,
            pathname: uri({ host: process.env.APP_HOST, port: process.env.APP_PORT }),
          },
        },
      ],
    }) satisfies ProxyConfigModel,
});

export { _config, config };
