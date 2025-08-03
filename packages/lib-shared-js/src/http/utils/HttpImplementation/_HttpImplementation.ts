import { stringify } from '@lib/shared/core/utils/stringify/stringify';
import { HttpError } from '@lib/shared/http/errors/HttpError/HttpError';
import { HTTP_METHOD, HTTP_RESPONSE_TYPE, HTTP_STATUS_CODE } from '@lib/shared/http/http.constants';
import { type HttpMethodModel, type HttpResponseTypeModel } from '@lib/shared/http/http.models';
import {
  type _HttpImplementationModel,
  type _HttpRequestParamsModel,
} from '@lib/shared/http/utils/HttpImplementation/_HttpImplementation.models';
import { type HttpImplementationParamsModel } from '@lib/shared/http/utils/HttpImplementation/HttpImplementation.models';
import { uri } from '@lib/shared/http/utils/uri/uri';
import {
  type AxiosError,
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from 'axios';
import axios from 'axios';

export class _HttpImplementation implements _HttpImplementationModel {
  protected _instance: AxiosInstance;
  protected _onError?(error: Error): Promise<void>;

  constructor({
    baseUri,
    onError,
    onRequest,
    onResponse,
    request,
  }: HttpImplementationParamsModel = {}) {
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

  delete = async <TParams, TResult>({
    params,
    request,
    url,
  }: _HttpRequestParamsModel<TParams>): Promise<TResult | null> =>
    this.request<TParams, TResult>(HTTP_METHOD.DELETE, {
      request,
      url: uri<TParams>({ host: url, params }),
    });

  get = async <TParams, TResult>({
    onMessage,
    params,
    request,
    url,
  }: _HttpRequestParamsModel<TParams>): Promise<TResult | null> =>
    this.request<TParams, TResult>(HTTP_METHOD.GET, {
      onMessage,
      request,
      url: uri<TParams>({ host: url, params }),
    });

  post = async <TParams, TResult>({
    onMessage,
    params,
    request,
    url,
  }: _HttpRequestParamsModel<TParams>): Promise<TResult | null> =>
    this.request<TParams, TResult>(HTTP_METHOD.POST, { onMessage, params, request, url });

  put = async <TParams, TResult>({
    params,
    request,
    url,
  }: _HttpRequestParamsModel<TParams>): Promise<TResult | null> =>
    this.request<TParams, TResult>(HTTP_METHOD.PUT, { params, request, url });

  request = async <TParams, TResult>(
    method: HttpMethodModel,
    { onMessage, params, request, url }: _HttpRequestParamsModel<TParams>,
  ): Promise<TResult | null> => {
    try {
      const response = await this._instance.request({
        ...request,
        adapter: 'fetch',
        data: params,
        method,
        url: url ?? '',
      } as AxiosRequestConfig);
      if (request?.responseType === HTTP_RESPONSE_TYPE.STREAM && onMessage) {
        const reader = (response?.data as ReadableStream<AllowSharedBufferSource>)?.getReader();
        const decoder = new TextDecoder();
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          const chunk = decoder.decode(value, { stream: true });
          const lines = chunk
            .split('\n')
            .reduce(
              (result, line) =>
                line.startsWith('data:') ? [...result, line.replace('data:', '')] : result,
              [] as Array<string>,
            );
          for (const line of lines) {
            let data = line as TResult;
            try {
              ({ data } = JSON.parse(line) as { data: TResult });
            } catch (_) {}
            onMessage(data);
          }
        }
      }
      return (response?.data as TResult) ?? null;
    } catch (e) {
      console.error(e);
      const eF = new HttpError(
        (e as AxiosError).response?.status ?? HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR,
        stringify((e as AxiosError).response?.data),
        (e as AxiosError).stack,
      );
      if (this._onError) {
        await this._onError(eF);
        return null;
      }
      throw eF;
    }
  };
}
