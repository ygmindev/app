export type UriModel<TType = object> = {
  host?: string;
  params?: TType;
  pathname?: string;
  port?: number | string;
  subdomain?: string;
};
