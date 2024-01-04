import { type GraphQlQueryParamsFieldsModel } from '#lib-frontend/data/utils/graphQlQuery/graphQlQuery.models';
import { type UseResourceMethodParamsFieldsModel } from '#lib-frontend/resource/hooks/useResourceMethod/useResourceMethod.models';
import { type SessionModel } from '#lib-shared/chat/resources/Session/Session.models';
import { type ChatModel } from '#lib-shared/chat/resources/Chat/Chat.models';
import { type ResourceMethodTypeCrudModel } from '#lib-shared/resource/resource.models';

export const SESSION_FIELDS = [
  'name',
] satisfies GraphQlQueryParamsFieldsModel<SessionModel>;

export const SESSION_OUTPUT_FIELDS = [
  { result: SESSION_FIELDS },
] satisfies UseResourceMethodParamsFieldsModel<
  ResourceMethodTypeCrudModel,
  SessionModel,
  ChatModel
>;
