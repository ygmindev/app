import { type HTTP_RESPONSE_TYPE } from '@lib/shared/http/http.constants';
import { type _HttpImplementationModel } from '@lib/shared/http/utils/HttpImplementation/_HttpImplementation.models';
import { type UriParamsModel } from '@lib/shared/http/utils/uri/uri.models';

export type HttpRequestParamsModel = {
  headers?: object;
  responseType?: HTTP_RESPONSE_TYPE;
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
  request?: HttpRequestParamsModel;
  onError?(error: Error): Promise<void>;
  onRequest?(request: HttpRequestParamsModel): Promise<HttpRequestParamsModel>;
  onResponse?<TResult>(response: HttpReponseModel<TResult>): Promise<HttpReponseModel<TResult>>;
};

export type HttpImplementationModel = _HttpImplementationModel;
