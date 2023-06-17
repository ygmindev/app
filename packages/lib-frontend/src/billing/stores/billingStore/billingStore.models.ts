import type { ReducerModel } from '#lib-frontend/state/state.models';
import type { PaymentMethodModel } from '#lib-shared/billing/resources/PaymentMethod/PaymentMethod.models';
import type { EntityResourcePartialModel } from '#lib-shared/resource/resources/EntityResource/EntityResource.models';

export type BillingStateModel = {
  paymentMethods?: Array<EntityResourcePartialModel<PaymentMethodModel>>;
};

export type BillingActionsParamsModel = {
  paymentMethodAdd: EntityResourcePartialModel<PaymentMethodModel>;

  paymentMethodRemove: string;

  paymentMethodUpdate: EntityResourcePartialModel<PaymentMethodModel>;

  paymentMethodsSet: Array<EntityResourcePartialModel<PaymentMethodModel>>;
};

export type BillingReducerModel = ReducerModel<BillingStateModel, BillingActionsParamsModel>;
