import { trimPathname } from '@lib/frontend/route/utils/trimPathname/trimPathname';
import { type UriParamsModel } from '@lib/shared/http/utils/uri/uri.models';
import trimStart from 'lodash/trimStart';

export const uri = <TType extends unknown>({
  host = '',
  isTrim = true,
  params,
  pathname,
  port,
  protocol = true,
  subdomain,
}: UriParamsModel<TType>): string => {
  let uri = `${host}${port ? `:${port}` : ''}${pathname ? (isTrim ? trimPathname(pathname) : pathname) : ''}`;
  if (params) {
    const queryParams = Object.entries(params as unknown as Record<string, string>)
      .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
      .join('&');
    uri = `${uri}?${queryParams}`;
  }
  let protocolF = protocol ? (process.env.SERVER_APP_IS_HTTPS === 'true' ? 'https' : 'http') : '';
  const uriSplit = uri.split('://');
  if (uriSplit.length > 1) {
    [protocolF, uri] = uriSplit;
  }
  subdomain && (uri = `${subdomain}.${trimStart(uri, 'www.')}`);
  protocol && (uri = `${protocolF}://${uri}`);
  return uri;
};
