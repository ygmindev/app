import { type HttpRequestParamsModel } from '@lib/shared/http/utils/HttpImplementation/HttpImplementation.models';

export type _HttpRequestParamsModel<TParams, TResult> = {
  params?: TParams;
  request?: HttpRequestParamsModel;
  url: string;
  onMessage?(data: TResult, messageType?: string): void;
};

export type _HttpImplementationModel = {
  delete<TParams, TResult>(
    params: _HttpRequestParamsModel<TParams, TResult>,
  ): Promise<TResult | null>;
  get<TParams, TResult>(params: _HttpRequestParamsModel<TParams, TResult>): Promise<TResult | null>;
  post<TParams, TResult>(
    params: _HttpRequestParamsModel<TParams, TResult>,
  ): Promise<TResult | null>;
  put<TParams, TResult>(params: _HttpRequestParamsModel<TParams, TResult>): Promise<TResult | null>;
};
