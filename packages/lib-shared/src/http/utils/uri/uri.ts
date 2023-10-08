import { trimPathname } from '#lib-frontend/route/utils/trimPathname/trimPathname';
import { type UriParamsModel } from '#lib-shared/http/utils/uri/uri.models';

export const uri = <TType extends unknown>({
  host = '',
  params,
  pathname,
  port,
}: UriParamsModel<TType>): string => {
  let uri = `${host}${port ? `:${port}` : ''}${pathname ? trimPathname(pathname) : ''}`;
  if (params) {
    const queryParams = Object.entries(params as unknown as Record<string, string>)
      .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
      .join('&');
    uri = `${uri}?${queryParams}`;
  }
  return uri;
};
