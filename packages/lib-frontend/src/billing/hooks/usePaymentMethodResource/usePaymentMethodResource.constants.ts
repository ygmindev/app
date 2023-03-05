import type { GraphQlFieldModel } from '@lib/frontend/http/utils/graphQlQuery/graphQlQuery.models';
import type { PaymentMethodModel } from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.models';

export const PAYMENT_METHOD_FIELDS: Array<GraphQlFieldModel<PaymentMethodModel>> = [
  '_id',
  'id',
  'last4',
  'type',
];
