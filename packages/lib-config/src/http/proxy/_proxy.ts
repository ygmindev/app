import { PROXY_HANDLER } from '#lib-config/http/proxy/proxy.constants';
import { type _ProxyConfigModel, type ProxyConfigModel } from '#lib-config/http/proxy/proxy.models';

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
              handle: {
                handler,
                upstreams: [{ dial: to.pathname }],
              },
              match: match.map((value) => ({ path: value })),
            };
          }),
        },
      },
    },
  },
});
