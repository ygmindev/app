import type { GraphQlFieldModel } from '@lib/frontend/graphql/utils/graphQlQuery/graphQlQuery.models';
import type { CardModel } from '@lib/shared/billing/resources/Card/Card.models';

export const CARD_FIELDS: Array<GraphQlFieldModel<CardModel>> = ['_id'];
