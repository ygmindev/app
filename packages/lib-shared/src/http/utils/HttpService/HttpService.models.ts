import type { _HttpServiceModel } from '@lib/shared/http/utils/HttpService/_HttpService.models';
import type {
  HTTP_METHOD,
  HTTP_RESPONSE_TYPE,
} from '@lib/shared/http/utils/HttpService/HttpService.constants';
import type { UriParamsModel } from '@lib/shared/http/utils/uri/uri.models';

export type HttpMethodModel = `${HTTP_METHOD}`;

export type HttpResponseTypeModel = `${HTTP_RESPONSE_TYPE}`;

export interface HttpRequestParamsModel {
  headers?: object;
  responseType?: HttpResponseTypeModel;
  timeout?: number;
  withCredentials?: boolean;
}

export interface HttpReponseModel<TResult> {
  data: TResult;
  headers: object;
  status: number;
  statusText: string;
}

export interface HttpServiceParamsModel {
  baseUri: UriParamsModel;
  onError?<TError extends Error = Error>(error: TError): void;
  onRequest?(request: HttpRequestParamsModel): Promise<HttpRequestParamsModel>;
  onResponse?<TResult>(response: HttpReponseModel<TResult>): Promise<HttpReponseModel<TResult>>;
  request?: HttpRequestParamsModel;
}

export interface HttpServiceModel extends _HttpServiceModel {}
