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
  onRequest(request: HttpRequestContextModel): Promise<HttpResponseContextModel>;
};

export type _HandlerModel = {
  handle: (
    request: HttpRequest,
    context: InvocationContext,
  ) => Promise<HttpResponse | HttpResponseInit>;
};
