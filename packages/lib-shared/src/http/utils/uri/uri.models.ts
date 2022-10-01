export interface UriParamsModel<TParams = void> {
  host: string;
  params?: TParams;
  path?: string;
  port?: number;
}
