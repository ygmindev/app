import { fromDist } from '@lib/backend/file/utils/fromDist/fromDist';
import { defineConfig } from '@lib/config/core/utils/defineConfig/defineConfig';
import { _proxy } from '@lib/config/http/proxy/_proxy';
import { PROXY_HANDLER } from '@lib/config/http/proxy/proxy.constants';
import { type ProxyConfigModel } from '@lib/config/http/proxy/proxy.models';
import { uri } from '@lib/shared/http/utils/uri/uri';

const { _config, config } = defineConfig({
  _config: _proxy,

  config: () =>
    ({
      configFile: fromDist('proxy.json'),

      listen: [80, 443],

      routes: [
        {
          match: [{ pathname: '/api/*' }],
          to: {
            handler: PROXY_HANDLER.REVERSE_PROXY,
            host: uri({
              host: process.env.SERVER_APP_HOST,
              isProtocol: false,
              port: process.env.SERVER_APP_PORT,
            }),
          },
        },
        {
          match: [{ pathname: '/ws' }],
          to: {
            handler: PROXY_HANDLER.REVERSE_PROXY,
            host: uri({
              host: process.env.SERVER_APP_WEBSOCKET_HOST,
              isProtocol: false,
              port: process.env.SERVER_APP_WEBSOCKET_PORT,
            }),
          },
        },
        {
          match: [{ pathname: '/*' }],
          to: {
            handler: PROXY_HANDLER.REVERSE_PROXY,
            host: uri({
              host: process.env.APP_HOST,
              isProtocol: false,
              port: process.env.APP_PORT,
            }),
          },
        },
      ],
    }) satisfies ProxyConfigModel,
});

export { _config, config };
