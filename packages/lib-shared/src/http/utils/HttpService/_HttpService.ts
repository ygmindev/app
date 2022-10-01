import type {
  _HttpServiceModel,
  _RequestParamsModel,
} from '@lib/shared/http/utils/HttpService/_HttpService.models';
import { HTTP_METHOD } from '@lib/shared/http/utils/HttpService/HttpService.constants';
import type {
  HttpMethodModel,
  HttpResponseTypeModel,
  HttpServiceParamsModel,
} from '@lib/shared/http/utils/HttpService/HttpService.models';
import { uri } from '@lib/shared/http/utils/uri/uri';
import type { AxiosInstance, AxiosRequestConfig } from 'axios';
import axios from 'axios';

export class _HttpService implements _HttpServiceModel {
  protected _instance: AxiosInstance;

  protected _onError?<TError extends Error = Error>(error: TError): Promise<void>;

  constructor({ baseUri, onError, onRequest, onResponse, request }: HttpServiceParamsModel) {
    this._instance = axios.create({ ...(request as AxiosRequestConfig), baseURL: uri(baseUri) });

    this._onError = onError;

    onRequest &&
      this._instance.interceptors.request.use(
        ({ headers, responseType, timeout, withCredentials, ...params }) =>
          onRequest({
            ...params,
            headers,
            responseType: responseType as HttpResponseTypeModel,
            timeout,
            withCredentials,
          }),
      );

    onResponse &&
      this._instance.interceptors.response.use(({ data, headers, status, statusText, ...params }) =>
        onResponse({ ...params, data, headers, status, statusText }),
      );
  }

  _request = async <TParams, TResult, TError extends Error = Error>(
    method: HttpMethodModel,
    { onError, params, path, request }: _RequestParamsModel<TParams, TError>,
  ): Promise<TResult | null> => {
    try {
      const response = await this._instance.request({
        ...request,
        data: params,
        method,
        url: path || '',
      } as AxiosRequestConfig);
      return response.data || null;
    } catch (e) {
      if (onError) {
        onError(e as TError);
      } else if (this._onError) {
        this._onError(e as TError);
      } else {
        throw e;
      }
      return null;
    }
  };

  get = async <TParams, TResult, TError extends Error = Error>({
    onError,
    params,
    path,
    request,
  }: _RequestParamsModel<TParams, TError>): Promise<TResult | null> =>
    this._request<TParams, TResult, TError>(HTTP_METHOD.GET, {
      onError,
      path: uri<TParams>({ host: path, params }),
      request,
    });

  delete = async <TParams, TResult, TError extends Error = Error>({
    onError,
    params,
    path,
    request,
  }: _RequestParamsModel<TParams, TError>): Promise<TResult | null> =>
    this._request<TParams, TResult, TError>(HTTP_METHOD.DELETE, {
      onError,
      path: uri<TParams>({ host: path, params }),
      request,
    });

  post = async <TParams, TResult, TError extends Error = Error>({
    onError,
    params,
    path,
    request,
  }: _RequestParamsModel<TParams, TError>): Promise<TResult | null> =>
    this._request<TParams, TResult, TError>(HTTP_METHOD.POST, { onError, params, path, request });

  put = async <TParams, TResult, TError extends Error = Error>({
    onError,
    params,
    path,
    request,
  }: _RequestParamsModel<TParams, TError>): Promise<TResult | null> =>
    this._request<TParams, TResult, TError>(HTTP_METHOD.PUT, { onError, params, path, request });
}
