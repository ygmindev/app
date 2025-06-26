import { type HttpRequestParamsModel } from '@lib/backend/http/utils/HttpRequest/HttpRequest.models';
import { type HttpResponseModel } from '@lib/backend/http/utils/HttpResponse/HttpResponse.models';

export type _RenderParamsModel = HttpRequestParamsModel<ReadableStream>;

export type _RenderModel = HttpResponseModel<ReadableStream>;
