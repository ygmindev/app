import { HttpMessage } from '@lib/backend/http/utils/HttpMessage/HttpMessage';
import {
  type HttpRequestModel,
  type HttpRequestParamsModel,
} from '@lib/backend/http/utils/HttpRequest/HttpRequest.models';
import { LANGUAGE_DEFAULT } from '@lib/config/locale/internationalize/internationalize.constants';
import { type HttpMethodModel } from '@lib/shared/http/http.models';
import { type I18nModel } from '@lib/shared/locale/locale.models';

export class HttpRequest<TType> extends HttpMessage<TType> implements HttpRequestModel<TType> {
  _i18n?: I18nModel;
  _lang?: string;
  _method?: HttpMethodModel;
  _query?: URLSearchParams;
  _url!: string;

  constructor({ i18n, lang, method, query, url, ...params }: HttpRequestParamsModel<TType>) {
    super({ ...params });
    this.i18n = i18n;
    this.lang = lang ?? this.headers?.['accept-language'] ?? LANGUAGE_DEFAULT;
    this.method = method;
    this.query = query;
    this.url = url;
  }

  get i18n(): I18nModel | undefined {
    return this._i18n;
  }

  set i18n(value: I18nModel | undefined) {
    this._i18n = value;
  }

  get lang(): string | undefined {
    return this._method;
  }

  set lang(value: string | undefined) {
    this._lang = value;
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
