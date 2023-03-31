import type { GraphQlQueryParamsFieldsModel } from '@lib/frontend/http/utils/graphQlQuery/graphQlQuery.models';
import type { UseResourceMethodParamsFieldsModel } from '@lib/frontend/resource/hooks/useResourceMethod/useResourceMethod.models';
import type { CardModel } from '@lib/shared/billing/resources/Card/Card.models';
import type { ResourceMethodTypeCrudModel } from '@lib/shared/resource/resource.models';
import type { UserModel } from '@lib/shared/user/resources/User/User.models';

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

export const CARD_OUTPUT_FIELDS: UseResourceMethodParamsFieldsModel<
  ResourceMethodTypeCrudModel,
  CardModel,
  UserModel
> = [{ result: CARD_FIELDS }];
