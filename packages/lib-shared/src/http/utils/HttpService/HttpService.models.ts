import { type HttpResponseTypeModel } from '#lib-shared/http/http.models';
import { type _HttpServiceModel } from '#lib-shared/http/utils/HttpService/_HttpService.models';
import { type UriParamsModel } from '#lib-shared/http/utils/uri/uri.models';

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
