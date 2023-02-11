import type {
  _HttpRequestParamsModel,
  _HttpServiceModel,
} from '@lib/shared/http/utils/HttpService/_HttpService.models';
import { HTTP_METHOD } from '@lib/shared/http/utils/HttpService/HttpService.constants';
import type {
  HttpMethodModel,
  HttpResponseTypeModel,
  HttpServiceParamsModel,
} from '@lib/shared/http/utils/HttpService/HttpService.models';
import { uri } from '@lib/shared/http/utils/uri/uri';
import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import axios from 'axios';

export class _HttpService implements _HttpServiceModel {
  protected _instance: AxiosInstance;
  protected _onError?<TError extends Error = Error>(error: TError): void;

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
          }) as unknown as InternalAxiosRequestConfig,
      );

    onResponse &&
      this._instance.interceptors.response.use(
        async ({ data, headers, status, statusText, ...params }) =>
          onResponse({ ...params, data, headers, status, statusText }) as Promise<AxiosResponse>,
      );
  }

  _request = async <TParams, TResult>(
    method: HttpMethodModel,
    { params, path, request }: _HttpRequestParamsModel<TParams>,
  ): Promise<TResult | null> => {
    try {
      const response = await this._instance.request({
        ...request,
        data: params,
        method,
        url: path || '',
      } as AxiosRequestConfig);
      return (response && response.data) || null;
    } catch (e) {
      this._onError && this._onError(e as Error);
      return null;
    }
  };

  get = async <TParams, TResult>({
    params,
    path,
    request,
  }: _HttpRequestParamsModel<TParams>): Promise<TResult | null> =>
    this._request<TParams, TResult>(HTTP_METHOD.GET, {
      path: uri<TParams>({ host: path, params }),
      request,
    });

  delete = async <TParams, TResult>({
    params,
    path,
    request,
  }: _HttpRequestParamsModel<TParams>): Promise<TResult | null> =>
    this._request<TParams, TResult>(HTTP_METHOD.DELETE, {
      path: uri<TParams>({ host: path, params }),
      request,
    });

  post = async <TParams, TResult>({
    params,
    path,
    request,
  }: _HttpRequestParamsModel<TParams>): Promise<TResult | null> =>
    this._request<TParams, TResult>(HTTP_METHOD.POST, { params, path, request });

  put = async <TParams, TResult>({
    params,
    path,
    request,
  }: _HttpRequestParamsModel<TParams>): Promise<TResult | null> =>
    this._request<TParams, TResult>(HTTP_METHOD.PUT, { params, path, request });
}
