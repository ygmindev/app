import {
  type HttpRequest,
  type HttpResponse,
  type HttpResponseInit,
  type InvocationContext,
} from '@azure/functions';
import { type HttpRequestModel } from '@lib/backend/http/utils/HttpRequest/HttpRequest.models';
import { type HttpResponseModel } from '@lib/backend/http/utils/HttpResponse/HttpResponse.models';

export type _HandlerParamsModel = {
  isStream?: boolean;
  name: string;
  onRequest(request: HttpRequestModel<ReadableStream>): Promise<HttpResponseModel<ReadableStream>>;
};

export type _HandlerModel = (
  request: HttpRequest,
  context: InvocationContext,
) => Promise<HttpResponse | HttpResponseInit>;
