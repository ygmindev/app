import {
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from 'axios';
import axios from 'axios';

import { CONNECTIVITY } from '#lib-frontend/http/http.constants';
import { getConnectivity } from '#lib-frontend/http/utils/getConnectivity/getConnectivity';
import { OfflineError } from '#lib-shared/http/errors/OfflineError/OfflineError';
import { HTTP_METHOD } from '#lib-shared/http/http.constants';
import { type HttpMethodModel, type HttpResponseTypeModel } from '#lib-shared/http/http.models';
import {
  type _HttpRequestParamsModel,
  type _HttpServiceModel,
} from '#lib-shared/http/utils/HttpService/_HttpService.models';
import { type HttpServiceParamsModel } from '#lib-shared/http/utils/HttpService/HttpService.models';
import { uri } from '#lib-shared/http/utils/uri/uri';

export class _HttpService implements _HttpServiceModel {
  protected _instance: AxiosInstance;
  protected _onError?(error: Error): void;

  constructor({ baseUri, onError, onRequest, onResponse, request }: HttpServiceParamsModel = {}) {
    this._instance = axios.create({
      ...(request as AxiosRequestConfig),
      baseURL: baseUri ? uri(baseUri) : '',
    });

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
          onResponse({
            ...params,
            data: data as object,
            headers,
            status,
            statusText,
          }) as Promise<AxiosResponse>,
      );
  }

  request = async <TParams, TResult>(
    method: HttpMethodModel,
    { params, request, url }: _HttpRequestParamsModel<TParams>,
  ): Promise<TResult | null> => {
    try {
      const response = await this._instance.request({
        ...request,
        data: params,
        method,
        url: url ?? '',
      } as AxiosRequestConfig);
      return (response && (response.data as TResult)) ?? null;
    } catch (e) {
      throw (e as Error).message === 'Network Error' ||
        (await getConnectivity()) === CONNECTIVITY.OFFLINE
        ? new OfflineError()
        : (e as Error);
    }
  };

  get = async <TParams, TResult>({
    params,
    request,
    url,
  }: _HttpRequestParamsModel<TParams>): Promise<TResult | null> =>
    this.request<TParams, TResult>(HTTP_METHOD.GET, {
      request,
      url: uri<TParams>({ host: url, params }),
    });

  delete = async <TParams, TResult>({
    params,
    request,
    url,
  }: _HttpRequestParamsModel<TParams>): Promise<TResult | null> =>
    this.request<TParams, TResult>(HTTP_METHOD.DELETE, {
      request,
      url: uri<TParams>({ host: url, params }),
    });

  post = async <TParams, TResult>({
    params,
    request,
    url,
  }: _HttpRequestParamsModel<TParams>): Promise<TResult | null> =>
    this.request<TParams, TResult>(HTTP_METHOD.POST, { params, request, url });

  put = async <TParams, TResult>({
    params,
    request,
    url,
  }: _HttpRequestParamsModel<TParams>): Promise<TResult | null> =>
    this.request<TParams, TResult>(HTTP_METHOD.PUT, { params, request, url });
}
