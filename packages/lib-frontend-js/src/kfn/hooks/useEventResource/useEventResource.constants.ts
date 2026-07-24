import { type GraphqlQueryParamsFieldsModel } from '@lib/shared/graphql/utils/graphqlQuery/graphqlQuery.models';
import { type EventModel } from '@lib/model/kfn/Event/Event.models';

export const EVENT_FIELDS = [
  '_id',
  'created',
  'name',
  'start',
  'end',
] satisfies GraphqlQueryParamsFieldsModel<EventModel>;
