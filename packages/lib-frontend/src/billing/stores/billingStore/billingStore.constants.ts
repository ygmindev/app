import filter from 'lodash/filter';
import uniqBy from 'lodash/uniqBy';

import type { BillingReducerModel } from '#lib-frontend/billing/stores/billingStore/billingStore.models';

export const BILLING_REDUCER: BillingReducerModel = {
  actions: {
    paymentMethodAdd: (store, value) => {
      store.set('paymentMethods', uniqBy([...(store.get('paymentMethods') || []), value], '_id'));
    },
    paymentMethodRemove: (store, value) => {
      store.set('paymentMethods', filter(store.get('paymentMethods') || [], { _id: value }));
    },

    paymentMethodUpdate: (store, value) => {
      store.set(
        'paymentMethods',
        (store.get('paymentMethods') || []).map((paymentMethod) =>
          paymentMethod._id === value._id ? value : paymentMethod,
        ),
      );
    },

    paymentMethodsSet: (store, value) => {
      store.set('paymentMethods', value);
    },
  },

  initialState: {
    paymentMethods: undefined,
  },
};
