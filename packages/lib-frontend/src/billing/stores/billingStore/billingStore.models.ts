import { type ReducerModel } from '@lib/frontend/state/state.models';
import { type PaymentMethodModel } from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.models';
import { type EmptyObjectModel, type PartialModel } from '@lib/shared/core/core.models';

export type BillingStateModel = {
  paymentMethods?: Array<PartialModel<PaymentMethodModel>>;
};

export type BillingActionsParamsModel = EmptyObjectModel;

export type BillingReducerModel = ReducerModel<BillingStateModel, BillingActionsParamsModel>;
