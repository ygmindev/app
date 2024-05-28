import { type GraphqlQueryParamsFieldsModel } from '@lib/frontend/data/utils/graphqlQuery/graphqlQuery.models';
import { type ChatModel } from '@lib/shared/chat/resources/Chat/Chat.models';

export const CHAT_FIELDS = ['_id'] satisfies GraphqlQueryParamsFieldsModel<ChatModel>;
