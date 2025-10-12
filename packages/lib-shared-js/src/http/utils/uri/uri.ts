import { trimPathname } from '@lib/frontend/route/utils/trimPathname/trimPathname';
import { type UriParamsModel } from '@lib/shared/http/utils/uri/uri.models';
import trimStart from 'lodash/trimStart';

export const uri = <TType extends unknown>({
  host = '',
  isProtocol = true,
  isTrim = true,
  params,
  pathname,
  port,
  subdomain,
}: UriParamsModel<TType>): string => {
  let protocol: string = '';
  let uri = `${host}${port ? `:${port}` : ''}${pathname ? (isTrim ? trimPathname(pathname) : pathname) : ''}`;
  if (params) {
    const queryParams = Object.entries(params as unknown as Record<string, string>)
      .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
      .join('&');
    uri = `${uri}?${queryParams}`;
  }
  [protocol, uri] = uri.split('://');
  subdomain && (uri = `${subdomain}.${trimStart(uri, 'www.')}`);
  isProtocol && (uri = `${protocol}://${uri}`);
  return uri;
};
