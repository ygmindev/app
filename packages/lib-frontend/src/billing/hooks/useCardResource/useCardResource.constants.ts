import { type GraphQlQueryParamsFieldsModel } from '#lib-frontend/data/utils/graphQlQuery/graphQlQuery.models';
import { type CardModel } from '#lib-shared/billing/resources/Card/Card.models';

export const CARD_FIELDS: GraphQlQueryParamsFieldsModel<CardModel> = [
  '_id',
  'brand',
  'expMonth',
  'expYear',
  'funding',
  'id',
  'last4',
  'type',
];
