import { type GraphQlQueryParamsFieldsModel } from '@lib/frontend/data/utils/graphQlQuery/graphQlQuery.models';
import { type UseResourceMethodParamsFieldsModel } from '@lib/frontend/resource/hooks/useResourceMethod/useResourceMethod.models';
import { type SocketModel } from '@lib/shared/http/resources/Socket/Socket.models';
import { type ResourceMethodTypeCrudModel } from '@lib/shared/resource/resource.models';

export const SOCKET_FIELDS = ['name'] satisfies GraphQlQueryParamsFieldsModel<SocketModel>;

export const SOCKET_OUTPUT_FIELDS = [
  { result: SOCKET_FIELDS },
] satisfies UseResourceMethodParamsFieldsModel<ResourceMethodTypeCrudModel, SocketModel>;
