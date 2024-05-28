import { type GraphqlQueryParamsFieldsModel } from '@lib/frontend/data/utils/graphqlQuery/graphqlQuery.models';
import { type OrderModel } from '@lib/shared/commerce/resources/Order/Order.models';

export const ORDER_FIELDS = ['_id'] satisfies GraphqlQueryParamsFieldsModel<OrderModel>;
