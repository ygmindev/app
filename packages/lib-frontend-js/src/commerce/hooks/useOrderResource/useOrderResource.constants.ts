import { type OrderModel } from '@lib/model/commerce/Order/Order.models';
import { type GraphqlQueryParamsFieldsModel } from '@lib/shared/graphql/utils/graphqlQuery/graphqlQuery.models';

export const ORDER_FIELDS = ['_id'] satisfies GraphqlQueryParamsFieldsModel<OrderModel>;
