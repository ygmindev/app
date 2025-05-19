import { type HttpRequestParamsModel } from '@lib/backend/http/utils/HttpRequest/HttpRequest.models';
import { type HttpResponseModel } from '@lib/backend/http/utils/HttpResponse/HttpResponse.models';

export type _RenderParamsModel = HttpRequestParamsModel<ReadableStream>;

export type _RenderModel = HttpResponseModel<ReadableStream>;

// import { type HttpRequestParamsModel } from '@lib/backend/http/utils/HttpRequest/HttpRequest.models';
// import { type HttpResponseModel } from '@lib/backend/http/utils/HttpResponse/HttpResponse.models';
// import { type RootContextModel } from '@lib/frontend/root/root.models';
// import { type PartialDeepModel } from '@lib/shared/core/core.models';

// export type _RenderParamsModel = Pick<HttpRequestParamsModel<ReadableStream>, 'headers'> & {
//   context?: PartialDeepModel<RootContextModel>;
// };

// export type _RenderModel = {
//   pipeStream(writable: WritableStream): void;
//   response: HttpResponseModel<ReadableStream>;
// };
