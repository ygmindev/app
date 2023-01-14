import type { HttpRequestParamsModel } from '@lib/shared/http/utils/HttpService/HttpService.models';

export interface _HttpRequestParamsModel<TParams> {
  params?: TParams;
  path: string;
  request?: HttpRequestParamsModel;
}

export interface _HttpServiceModel {
  delete<TParams, TResult>(params: _HttpRequestParamsModel<TParams>): Promise<TResult | null>;
  get<TParams, TResult>(params: _HttpRequestParamsModel<TParams>): Promise<TResult | null>;
  post<TParams, TResult>(params: _HttpRequestParamsModel<TParams>): Promise<TResult | null>;
  put<TParams, TResult>(params: _HttpRequestParamsModel<TParams>): Promise<TResult | null>;
}
