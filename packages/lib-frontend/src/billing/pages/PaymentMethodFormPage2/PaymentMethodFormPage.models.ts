import { type PagePropsModel } from '#lib-frontend/core/core.models';
import { type PaymentMethodModel } from '#lib-shared/billing/resources/PaymentMethod/PaymentMethod.models';
import { type PartialModel } from '#lib-shared/core/core.models';

export type PaymentMethodFormPagePropsModel = PagePropsModel;

export type PaymentMethodFormPageParamsModel = {
  value?: PartialModel<PaymentMethodModel>;
};