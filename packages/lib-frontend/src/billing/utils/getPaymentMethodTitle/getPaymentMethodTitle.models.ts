import { type TranslatableTextModel } from '#lib-frontend/locale/locale.models';
import { type PaymentMethodModel } from '#lib-shared/billing/resources/PaymentMethod/PaymentMethod.models';
import { type PartialModel } from '#lib-shared/core/core.models';

export type GetPaymentMethodTitleParamsModel = PartialModel<PaymentMethodModel>;

export type GetPaymentMethodTitleModel = TranslatableTextModel;
