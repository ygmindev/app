import { type DatabaseModel } from '@lib/backend/database/utils/Database/Database.models';
import { type HttpRequestModel } from '@lib/backend/http/utils/HttpRequest/HttpRequest.models';
import { type HttpResponseModel } from '@lib/backend/http/utils/HttpResponse/HttpResponse.models';
import { type API_ENDPOINT_TYPE } from '@lib/config/api/api.constants';
import { type GraphqlConfigModel } from '@lib/config/graphql/graphql.models';
import { type AuthStateModel } from '@lib/frontend/auth/stores/authStore/authStore.models';
import { type SignInTokenModel } from '@lib/model/auth/SignIn/SignIn.models';
import { type HTTP_METHOD, type HTTP_PROTOCOL } from '@lib/shared/http/http.constants';
import { type FastifyReply, type FastifyRequest } from 'fastify';

export type ApiConfigModel = {
  prefix: string;

  routes: Array<ApiEndpointModel<unknown, unknown>>;

  onBeforeRegister?(endpoint: ApiEndpointModel<unknown, unknown>): Promise<void>;
};

export type RequestContextModel = {
  database?: DatabaseModel;
  group?: string;
  pathname?: string;
  requestId?: string;
  token?: AuthStateModel['token'];
  user?: SignInTokenModel;
};

export type ApiHandlerModel<TType = void, TParams = void> = (
  request: HttpRequestModel<TParams>,
  context?: RequestContextModel,
  params?: { rep: FastifyReply; req: FastifyRequest },
) => Promise<HttpResponseModel<TType>>;

export type ApiEndpointModel<TType = void, TParams = void> = {
  method: HTTP_METHOD | Array<HTTP_METHOD>;

  pathname: string;

  prefix?: boolean | string;

  protocol?: HTTP_PROTOCOL;
} & (
  | {
      handler?: never;
      schema: GraphqlConfigModel;
      type: API_ENDPOINT_TYPE.GRAPHQL;
    }
  | {
      handler: ApiHandlerModel<TType, TParams>;
      schema?: never;
      type: API_ENDPOINT_TYPE.REST;
    }
);
