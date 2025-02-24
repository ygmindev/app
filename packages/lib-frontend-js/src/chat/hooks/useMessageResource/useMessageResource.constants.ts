import { type GraphqlQueryParamsFieldsModel } from '@lib/frontend/data/utils/graphqlQuery/graphqlQuery.models';
import { type MessageModel } from '@lib/shared/chat/resources/Message/Message.models';

export const MESSAGE_FIELDS = [
  '_id',
] satisfies GraphqlQueryParamsFieldsModel<MessageModel>;
