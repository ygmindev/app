import { fromDist } from '@lib/backend/file/utils/fromDist/fromDist';
import { _proxy } from '@lib/config/proxy/_proxy';
import { PROXY_HANDLER } from '@lib/config/proxy/proxy.constants';
import { type _ProxyConfigModel, type ProxyConfigModel } from '@lib/config/proxy/proxy.models';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';
import { uri } from '@lib/shared/http/utils/uri/uri';

const config = defineConfig<ProxyConfigModel, _ProxyConfigModel>({
  config: _proxy,

  params: () => ({
    configDir: fromDist('proxy.json'),

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
  }),
});

export default config;
