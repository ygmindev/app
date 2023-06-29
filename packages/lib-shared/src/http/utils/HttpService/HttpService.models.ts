import { type _HttpServiceModel } from '#lib-shared/http/utils/HttpService/_HttpService.models';
import {
  type HTTP_METHOD,
  type HTTP_RESPONSE_TYPE,
} from '#lib-shared/http/utils/HttpService/HttpService.constants';
import { type UriParamsModel } from '#lib-shared/http/utils/uri/uri.models';

export type HttpMethodModel = `${HTTP_METHOD}`;

export type HttpResponseTypeModel = `${HTTP_RESPONSE_TYPE}`;

export type HttpRequestParamsModel = {
  headers?: object;
  responseType?: HttpResponseTypeModel;
  timeout?: number;
  withCredentials?: boolean;
};

export type HttpReponseModel<TResult> = {
  data: TResult;
  headers: object;
  status: number;
  statusText: string;
};

export type HttpServiceParamsModel = {
  baseUri?: UriParamsModel;
  onError?(error: Error): void;
  onRequest?(request: HttpRequestParamsModel): Promise<HttpRequestParamsModel>;
  onResponse?<TResult>(response: HttpReponseModel<TResult>): Promise<HttpReponseModel<TResult>>;
  request?: HttpRequestParamsModel;
};

export type HttpServiceModel = _HttpServiceModel;
