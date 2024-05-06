export type UriModel<TType = object> = {
  host?: string;
  isProtocol?: boolean;
  params?: TType;
  pathname?: string;
  port?: number | string;
};
