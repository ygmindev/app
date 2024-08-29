import { PROXY_HANDLER } from '@lib/config/proxy/proxy.constants';
import { type _ProxyConfigModel, type ProxyConfigModel } from '@lib/config/proxy/proxy.models';
import { uri } from '@lib/shared/http/utils/uri/uri';

export const _proxy = ({ listen, routes }: ProxyConfigModel): _ProxyConfigModel => ({
  apps: {
    http: {
      servers: {
        proxy: {
          listen: listen.map((port) => `:${port}`),
          routes: routes?.map(({ match, to }) => {
            const handler = (() => {
              switch (to.handler) {
                case PROXY_HANDLER.REVERSE_PROXY:
                  return 'reverse_proxy';
              }
            })();
            return {
              handle: [
                {
                  handler,
                  upstreams: [
                    { dial: uri({ host: to.host, pathname: to.pathname, port: to.port }) },
                  ],
                },
              ],
              match: match.map(({ host, pathname, port }) => ({
                host: [uri({ host: host ?? 'localhost', port })],
                path: [pathname],
              })),
            };
          }),
        },
      },
    },
  },
});
