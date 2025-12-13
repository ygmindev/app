import { type GraphqlQueryParamsFieldsModel } from '@lib/frontend/data/utils/graphqlQuery/graphqlQuery.models';
import { type LogMessageModel } from '@lib/model/logging/LogMessage/LogMessage.models';

export const LOG_MESSAGE_FIELDS = ['_id'] satisfies GraphqlQueryParamsFieldsModel<LogMessageModel>;
