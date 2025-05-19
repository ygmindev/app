import { type DatabaseModel } from '@lib/backend/database/utils/Database/Database.models';
import { type HttpRequestModel } from '@lib/backend/http/utils/HttpRequest/HttpRequest.models';
import { type HttpResponseModel } from '@lib/backend/http/utils/HttpResponse/HttpResponse.models';
import { type API_ENDPOINT_TYPE } from '@lib/config/api/api.constants';
import { type GraphqlConfigModel } from '@lib/config/graphql/graphql.models';
import { type AuthStateModel } from '@lib/frontend/auth/stores/authStore/authStore.models';
import { type SignInTokenModel } from '@lib/shared/auth/resources/SignIn/SignIn.models';
import { type HttpMethodModel, type HttpProtocolModel } from '@lib/shared/http/http.models';
import { type FastifyReply, type FastifyRequest } from 'fastify';

export type ApiConfigModel = {
  onBeforeRegister?(endpoint: ApiEndpointModel<unknown, unknown>): Promise<void>;

  prefix: string;

  routes: Array<ApiEndpointModel<unknown, unknown>>;
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

export type ApiEndpointTypeModel = `${API_ENDPOINT_TYPE}`;

export type ApiEndpointModel<TType = void, TParams = void> = {
  method: HttpMethodModel | Array<HttpMethodModel>;

  pathname: string;

  prefix?: string;

  protocol?: HttpProtocolModel;
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
