import type { BillingReducerModel } from '@lib/frontend/billing/stores/billingStore/billingStore.models';
import filter from 'lodash/filter';
import uniqBy from 'lodash/uniqBy';

export const BILLING_REDUCER: BillingReducerModel = {
  actions: {
    paymentMethodAdd: (store, value) => {
      store.set('paymentMethods', uniqBy([...(store.get('paymentMethods') || []), value], '_id'));
    },
    paymentMethodRemove: (store, value) => {
      store.set('paymentMethods', filter(store.get('paymentMethods') || [], { _id: value }));
    },
    paymentMethodsSet: (store, value) => {
      store.set('paymentMethods', value);
    },
  },

  initialState: {
    paymentMethods: undefined,
  },
};
