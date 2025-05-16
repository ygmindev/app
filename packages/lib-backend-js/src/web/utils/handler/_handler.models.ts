import {
  type HttpRequest,
  type HttpResponse,
  type HttpResponseInit,
  type InvocationContext,
} from '@azure/functions';
import {
  type HttpRequestContextModel,
  type HttpResponseContextModel,
} from '@lib/backend/http/utils/http.models';

export type _HandlerParamsModel = {
  isStream?: boolean;
  name: string;
  onRequest(request: HttpRequestContextModel): Promise<HttpResponseContextModel>;
};

export type _HandlerModel = (
  request: HttpRequest,
  context: InvocationContext,
) => Promise<HttpResponse | HttpResponseInit>;
