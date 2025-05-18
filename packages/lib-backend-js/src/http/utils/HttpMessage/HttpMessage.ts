import {
  type HttpMessageModel,
  type HttpMessageParamsModel,
} from '@lib/backend/http/utils/HttpMessage/HttpMessage.models';

export class HttpMessage<TType> implements HttpMessageModel<TType> {
  _body?: TType;
  _cookies?: Record<string, string>;
  _headers?: Record<string, string>;

  constructor({ body, cookies, headers }: HttpMessageParamsModel<TType>) {
    this.body = body;
    this.cookies = cookies;
    this.headers = headers;
  }

  get body(): TType | undefined {
    return this._body;
  }

  set body(value: TType | undefined) {
    this._body = value;
  }

  get cookies(): Record<string, string> | undefined {
    return this._cookies;
  }

  set cookies(value: Record<string, string> | undefined) {
    this._cookies = value;
  }

  get headers(): Record<string, string> | undefined {
    return this._headers;
  }

  set headers(value: Record<string, string> | undefined) {
    this._headers = value;
  }
}
