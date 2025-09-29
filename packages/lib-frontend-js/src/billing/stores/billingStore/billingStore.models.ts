import { type ReducerModel } from '@lib/frontend/state/state.models';
import { type PaymentMethodModel } from '@lib/model/billing/PaymentMethod/PaymentMethod.models';
import { type PartialArrayModel } from '@lib/shared/core/core.models';

export type BillingStateModel = {
  paymentMethods?: PartialArrayModel<PaymentMethodModel>;
};

export type BillingReducerModel = ReducerModel<BillingStateModel>;
