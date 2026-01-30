import { type GraphqlQueryParamsFieldsModel } from '@lib/frontend/data/utils/graphqlQuery/graphqlQuery.models';
import { type EventModel } from '@lib/model/kfn/Event/Event.models';

export const EVENT_FIELDS = [
  '_id',
] satisfies GraphqlQueryParamsFieldsModel<EventModel>;
