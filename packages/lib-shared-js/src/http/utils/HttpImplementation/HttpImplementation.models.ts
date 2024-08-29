import { type HttpResponseTypeModel } from '@lib/shared/http/http.models';
import { type _HttpImplementationModel } from '@lib/shared/http/utils/HttpImplementation/_HttpImplementation.models';
import { type UriParamsModel } from '@lib/shared/http/utils/uri/uri.models';

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

export type HttpImplementationParamsModel = {
  baseUri?: UriParamsModel;
  onError?(error: Error): Promise<void>;
  onRequest?(request: HttpRequestParamsModel): Promise<HttpRequestParamsModel>;
  onResponse?<TResult>(response: HttpReponseModel<TResult>): Promise<HttpReponseModel<TResult>>;
  request?: HttpRequestParamsModel;
};

export type HttpImplementationModel = _HttpImplementationModel;
