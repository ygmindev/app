import { trimPathname } from '@lib/frontend/route/utils/trimPathname/trimPathname';
import { HTTP_PROTOCOL } from '@lib/shared/http/http.constants';
import { type UriParamsModel } from '@lib/shared/http/utils/uri/uri.models';
import trimStart from 'lodash/trimStart';

export const uri = <TType extends unknown>({
  host = '',
  isTrim = true,
  params,
  pathname,
  port,
  protocol,
  subdomain,
}: UriParamsModel<TType>): string => {
  let uri = `${host}${port ? `:${port}` : ''}${pathname ? (isTrim ? trimPathname(pathname) : pathname) : ''}`;
  if (params) {
    const queryParams = Object.entries(params as unknown as Record<string, string>)
      .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
      .join('&');
    uri = `${uri}?${queryParams}`;
  }
  let protocolF = `${(protocol ?? process.env.NODE_ENV === 'development') ? HTTP_PROTOCOL.HTTP : HTTP_PROTOCOL.HTTPS}`;
  if (!protocolF) {
    const split = uri.split('://');
    if (split.length > 1) {
      [protocolF, uri] = split;
    }
  }

  subdomain && (uri = `${subdomain}.${trimStart(uri, 'www.')}`);
  protocolF && (uri = `${protocolF}://${uri}`);
  return uri;
};
