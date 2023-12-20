import { type BillingReducerModel } from '#lib-frontend/billing/stores/billingStore/billingStore.models';
import { PAYMENT_METHOD_RESOURCE_NAME } from '#lib-shared/billing/resources/PaymentMethod/PaymentMethod.constants';

export const BILLING_REDUCER: BillingReducerModel = {
  actions: {},

  initialState: {
    [PAYMENT_METHOD_RESOURCE_NAME]: [],
  },
};
