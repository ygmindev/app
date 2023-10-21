import { type ReducerModel } from '#lib-frontend/state/state.models';
import { type PaymentMethodModel } from '#lib-shared/billing/resources/PaymentMethod/PaymentMethod.models';
import { type PartialModel } from '#lib-shared/core/core.models';

export type BillingStateModel = {
  paymentMethods?: Array<PartialModel<PaymentMethodModel>>;
};

export type BillingActionsParamsModel = {
  paymentMethodAdd: PartialModel<PaymentMethodModel>;

  paymentMethodRemove: string;

  paymentMethodUpdate: PartialModel<PaymentMethodModel>;

  paymentMethodsSet: Array<PartialModel<PaymentMethodModel>>;
};

export type BillingReducerModel = ReducerModel<BillingStateModel, BillingActionsParamsModel>;
