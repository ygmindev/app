import { HttpMessage } from '@lib/backend/http/utils/HttpMessage/HttpMessage';
import {
  type HttpRequestModel,
  type HttpRequestParamsModel,
} from '@lib/backend/http/utils/HttpRequest/HttpRequest.models';
import { type HttpMethodModel } from '@lib/shared/http/http.models';

export class HttpRequest<TType> extends HttpMessage<TType> implements HttpRequestModel<TType> {
  _language?: string;
  _method?: HttpMethodModel;
  _query?: URLSearchParams;
  _url!: string;

  constructor({ language, method, query, url, ...params }: HttpRequestParamsModel<TType>) {
    super({ ...params });
    this.language = language ?? this.headers?.['accept-language'] ?? 'en';
    this.method = method;
    this.query = query;
    this.url = url;
  }

  get language(): string | undefined {
    return this._method;
  }

  set language(value: string | undefined) {
    this._language = value;
  }

  get method(): HttpMethodModel | undefined {
    return this._method;
  }

  set method(value: HttpMethodModel | undefined) {
    this._method = value;
  }

  get query(): URLSearchParams | undefined {
    return this._query;
  }

  set query(value: URLSearchParams | undefined) {
    this._query = value;
  }

  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }
}
