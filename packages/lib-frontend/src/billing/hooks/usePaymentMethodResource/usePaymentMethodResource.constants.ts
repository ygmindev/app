import { type GraphQlQueryParamsFieldsModel } from '#lib-frontend/data/utils/graphQlQuery/graphQlQuery.models';
import { type PaymentMethodModel } from '#lib-shared/billing/resources/PaymentMethod/PaymentMethod.models';

export const PAYMENT_METHOD_OUTPUT_FIELDS: GraphQlQueryParamsFieldsModel<PaymentMethodModel> = [
  '_id',
];
