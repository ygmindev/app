import { type GraphQlQueryParamsFieldsModel } from '@lib/frontend/data/utils/graphQlQuery/graphQlQuery.models';
import { type ChatModel } from '@lib/shared/chat/resources/Chat/Chat.models';

export const CHAT_FIELDS = [
  '_id',
] satisfies GraphQlQueryParamsFieldsModel<ChatModel>;
