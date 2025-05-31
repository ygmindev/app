import { HttpMessage } from '@lib/backend/http/utils/HttpMessage/HttpMessage';
import {
  type HttpResponseModel,
  type HttpResponseParamsModel,
} from '@lib/backend/http/utils/HttpResponse/HttpResponse.models';
import { type HttpError } from '@lib/shared/http/errors/HttpError/HttpError';
import { HTTP_STATUS_CODE } from '@lib/shared/http/http.constants';
import { type CookieOptionsModel } from '@lib/shared/http/http.models';
import capitalize from 'lodash/capitalize';

export class HttpResponse<TType> extends HttpMessage<TType> implements HttpResponseModel<TType> {
  _error?: Error;
  _redirectTo?: string;
  _statusCode?: number;

  constructor({ error, redirectTo, statusCode, ...params }: HttpResponseParamsModel<TType> = {}) {
    super({ ...params });
    this.error = error;
    this.redirectTo = redirectTo;
    this.statusCode = statusCode;
  }

  setCookie(key: string, value?: string, options?: CookieOptionsModel): void {
    value && !this._cookies && (this._cookies = {});
    if (value) {
      let cookieValue = value;
      options?.domain && (cookieValue += `; Domain=${options.domain}`);
      options?.expires && (cookieValue += `; Expires=${options.expires.toUTCString()}`);
      options?.isHttpOnly && (cookieValue += '; HttpOnly');
      options?.isSecure && (cookieValue += '; Secure');
      options?.maxAge && (cookieValue += `; Max-Age=${options.maxAge}`);
      options?.path && (cookieValue += `; Path=${options.path}`);
      options?.sameSite && (cookieValue += `; SameSite=${capitalize(options.sameSite)}`);
      (this._cookies as Record<string, string>)[key] = cookieValue;
    } else {
      delete this._cookies?.[key];
    }
  }

  setHeader(key: string, value?: string): void {
    this._headers
      ? !value && delete this._headers[key.toLowerCase()]
      : value && (this.headers = {});
    value
      ? ((this._headers as Record<string, string>)[key.toLowerCase()] = value)
      : delete (this._headers as Record<string, string>)[key.toLowerCase()];
  }

  get error(): Error | undefined {
    return this._error;
  }

  set error(value: Error | undefined) {
    this._error = value;
    if (value) {
      const { statusCode } = value as HttpError;
      this.statusCode = statusCode ?? HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR;
    } else {
      this.statusCode = undefined;
    }
  }

  get redirectTo(): string | undefined {
    return this._redirectTo;
  }

  set redirectTo(value: string | undefined) {
    this._redirectTo = value;
    value && (this.statusCode = HTTP_STATUS_CODE.REDIRECT);
  }

  get statusCode(): number {
    return this._statusCode ?? HTTP_STATUS_CODE.OK;
  }

  set statusCode(value: number | undefined) {
    this._statusCode = value;
  }
}
