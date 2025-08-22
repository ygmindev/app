import { type HttpMessageParamsModel } from '@lib/backend/http/utils/HttpMessage/HttpMessage.models';
import { type CookieOptionsModel } from '@lib/shared/http/http.models';

export type HttpResponseParamsModel<TType extends unknown> = HttpMessageParamsModel<TType> & {
  error?: Error;
  redirectTo?: string;
  statusCode?: number;
};

export type HttpResponseModel<TType extends unknown> = HttpResponseParamsModel<TType> & {
  setCookie(key: string, value?: string, options?: CookieOptionsModel): void;
  setHeader(key: string, value?: unknown): void;
};
