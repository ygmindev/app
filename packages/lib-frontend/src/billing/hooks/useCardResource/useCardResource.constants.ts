import type { GraphQlFieldModel } from '@lib/frontend/http/utils/graphQlQuery/graphQlQuery.models';
import type { CardModel } from '@lib/shared/billing/resources/Card/Card.models';

export const CARD_FIELDS: Array<GraphQlFieldModel<CardModel>> = [
  '_id',
  'created',
  'brand',
  'last4',
];
