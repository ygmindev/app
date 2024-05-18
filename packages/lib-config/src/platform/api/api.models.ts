import { type DatabaseModel } from '@lib/backend/database/utils/Database/Database.models';
import { type SignInTokenModel } from '@lib/shared/auth/resources/SignIn/SignIn.models';
import {
  type HttpMethodModel,
  type HttpRequestModel,
  type HttpResponseModel,
} from '@lib/shared/http/http.models';

export type ApiConfigModel = {
  prefix: string;

  routes: Array<ApiEndpointModel>;
};

export type ApiEndpointModel = {
  filename?: string;
  handle?: ApiHandleModel;
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

export type ApiHandleModel = (
  request: HttpRequestModel,
  context?: RequestContextModel,
) => Promise<HttpResponseModel>;
