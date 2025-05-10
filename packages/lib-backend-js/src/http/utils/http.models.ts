import { type CookieOptionsModel, type HttpMethodModel } from '@lib/shared/http/http.models';

export type HttpRequestContextModel = {
  body?: ReadableStream;
  headers?: HttpRequestHeaderModel;
  method?: HttpMethodModel;
  query?: URLSearchParams;
  url: string;
};

export type HttpResponseContextModel = {
  body?: ReadableStream | string;
  cookies?: Array<HttpCookieModel>;
  error?: Error;
  headers?: Array<[string, string]>;
  redirectTo?: string;
  statusCode?: number;
};

export type HttpRequestHeaderModel = {
  entries(): Array<[string, string]>;
  get(key: string): string | null;
};

export type HttpCookieModel = { key: string; options?: CookieOptionsModel; value: string };
