import { type GraphqlQueryParamsFieldsModel } from '@lib/frontend/data/utils/graphqlQuery/graphqlQuery.models';
import { type OrderModel } from '@lib/model/commerce/Order/Order.models';

export const ORDER_FIELDS = ['_id'] satisfies GraphqlQueryParamsFieldsModel<OrderModel>;
