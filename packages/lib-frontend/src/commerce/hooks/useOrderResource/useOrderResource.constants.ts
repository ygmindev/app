import { type GraphQlQueryParamsFieldsModel } from '@lib/frontend/data/utils/graphQlQuery/graphQlQuery.models';
import { type OrderModel } from '@lib/shared/commerce/resources/Order/Order.models';

export const ORDER_FIELDS = [
  '_id',
] satisfies GraphQlQueryParamsFieldsModel<OrderModel>;
