export type UriParamsModel<TParams = undefined> = {
  host: string;
  params?: TParams;
  path?: string;
  port?: number | string;
};
