import { Environment } from '@lib/backend/environment/utils/Environment/Environment';
import { fromDist } from '@lib/backend/file/utils/fromDist/fromDist';
import { _proxy } from '@lib/config/proxy/_proxy';
import { PROXY_HANDLER } from '@lib/config/proxy/proxy.constants';
import { type _ProxyConfigModel, type ProxyConfigModel } from '@lib/config/proxy/proxy.models';
import { Config } from '@lib/config/utils/Config/Config';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { uri } from '@lib/shared/http/utils/uri/uri';

export const proxyConfig = new Config<ProxyConfigModel, _ProxyConfigModel>({
  config: _proxy,

  params: () => {
    const environment = Container.get(Environment);
    return {
      configDir: fromDist('proxy.json'),

      listen: [80, 443],

      routes: [
        {
          match: [{ pathname: '/api/*' }],
          to: {
            handler: PROXY_HANDLER.REVERSE_PROXY,
            host: uri({
              host: environment.variables.SERVER_APP_HOST,
              port: environment.variables.SERVER_APP_PORT,
              protocol: false,
            }),
          },
        },
        {
          match: [{ pathname: '/ws' }],
          to: {
            handler: PROXY_HANDLER.REVERSE_PROXY,
            host: uri({
              host: environment.variables.SERVER_APP_WEBSOCKET_HOST,
              port: environment.variables.SERVER_APP_WEBSOCKET_PORT,
              protocol: false,
            }),
          },
        },
        {
          match: [{ pathname: '/*' }],
          to: {
            handler: PROXY_HANDLER.REVERSE_PROXY,
            host: uri({
              host: environment.variables.APP_HOST,
              port: environment.variables.APP_PORT,
              protocol: false,
            }),
          },
        },
      ],
    };
  },
});
