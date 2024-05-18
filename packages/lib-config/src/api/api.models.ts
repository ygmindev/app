import { type DatabaseModel } from '@lib/backend/database/utils/Database/Database.models';
import { type SignInTokenModel } from '@lib/shared/auth/resources/SignIn/SignIn.models';
import {
  type HttpMethodModel,
  type HttpRequestModel,
  type HttpResponseModel,
} from '@lib/shared/http/http.models';

export type ApiConfigModel = {
  prefix: string;

  routes: Array<ApiEndpointModel<unknown, unknown>>;
};

export type ApiEndpointModel<TType = void, TParams = void> = {
  filename?: string;
  handler?: ApiHandlerModel<TType, TParams>;
  method: HttpMethodModel;
  pathname: string;
};

export type RequestContextModel = {
  database?: DatabaseModel;
  group?: string;
  pathname?: string;
  requestId?: string;
  user?: SignInTokenModel;
};

export type ApiHandlerModel<TType = void, TParams = void> = (
  request: HttpRequestModel<TParams>,
  context?: RequestContextModel,
) => Promise<HttpResponseModel<TType>>;
