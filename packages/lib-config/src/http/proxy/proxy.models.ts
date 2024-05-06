import { type PROXY_HANDLER } from '@lib/config/http/proxy/proxy.constants';
import { type UriParamsModel } from '@lib/shared/http/utils/uri/uri.models';

export type ProxyConfigModel = {
  configFile: string;
  listen: Array<number>;
  routes?: Array<{
    match: Array<UriParamsModel>;
    to: UriParamsModel & {
      handler: PROXY_HANDLER.REVERSE_PROXY;
    };
  }>;
};

export type _ProxyConfigModel = object;
