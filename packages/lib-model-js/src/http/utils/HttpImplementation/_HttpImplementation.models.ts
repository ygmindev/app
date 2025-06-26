import { type HttpRequestParamsModel } from '@lib/shared/http/utils/HttpImplementation/HttpImplementation.models';

export type _HttpRequestParamsModel<TParams> = {
  onMessage?<TType>(data: TType): void;
  params?: TParams;
  request?: HttpRequestParamsModel;
  url: string;
};

export type _HttpImplementationModel = {
  delete<TParams, TResult>(params: _HttpRequestParamsModel<TParams>): Promise<TResult | null>;
  get<TParams, TResult>(params: _HttpRequestParamsModel<TParams>): Promise<TResult | null>;
  post<TParams, TResult>(params: _HttpRequestParamsModel<TParams>): Promise<TResult | null>;
  put<TParams, TResult>(params: _HttpRequestParamsModel<TParams>): Promise<TResult | null>;
};
