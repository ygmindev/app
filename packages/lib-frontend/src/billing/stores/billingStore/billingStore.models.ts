import { type ReducerModel } from '@lib-frontend/state/state.models';
import { type PAYMENT_METHOD_RESOURCE_NAME } from '@lib-shared/billing/resources/PaymentMethod/PaymentMethod.constants';
import { type PaymentMethodModel } from '@lib-shared/billing/resources/PaymentMethod/PaymentMethod.models';
import { type EmptyObjectModel, type PartialModel } from '@lib-shared/core/core.models';

export type BillingStateModel = {
  [PAYMENT_METHOD_RESOURCE_NAME]?: Array<PartialModel<PaymentMethodModel>>;
};

export type BillingActionsParamsModel = EmptyObjectModel;

export type BillingReducerModel = ReducerModel<BillingStateModel, BillingActionsParamsModel>;
