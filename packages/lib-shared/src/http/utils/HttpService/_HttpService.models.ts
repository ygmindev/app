import type { HttpRequestParamsModel } from '@lib/shared/http/utils/HttpService/HttpService.models';

export interface _RequestParamsModel<TParams, TError extends Error = Error> {
  onError?(error: TError): Promise<void>;
  params?: TParams;
  path: string;
  request?: HttpRequestParamsModel;
}

export interface _HttpServiceModel {
  delete<TParams, TResult, TError extends Error = Error>(
    params: _RequestParamsModel<TParams, TError>,
  ): Promise<TResult | null>;
  get<TParams, TResult, TError extends Error = Error>(
    params: _RequestParamsModel<TParams, TError>,
  ): Promise<TResult | null>;
  post<TParams, TResult, TError extends Error = Error>(
    params: _RequestParamsModel<TParams, TError>,
  ): Promise<TResult | null>;
  put<TParams, TResult, TError extends Error = Error>(
    params: _RequestParamsModel<TParams, TError>,
  ): Promise<TResult | null>;
}
