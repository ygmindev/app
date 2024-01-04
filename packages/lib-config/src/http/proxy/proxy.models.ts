import { type PROXY_HANDLER } from '#lib-config/http/proxy/proxy.constants';

export type ProxyConfigModel = {
  listen: Array<number>;
  routes?: Array<{
    match: Array<string>;
    to: {
      handler: PROXY_HANDLER.REVERSE_PROXY;
      pathname: string;
    };
  }>;
};

export type _ProxyConfigModel = object;
