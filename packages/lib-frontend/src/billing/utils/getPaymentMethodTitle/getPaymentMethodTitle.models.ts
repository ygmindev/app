import { type TranslatableTextModel } from '#lib-frontend/locale/locale.models';
import { type PaymentMethodModel } from '#lib-shared/billing/resources/PaymentMethod/PaymentMethod.models';
import { type EntityResourcePartialModel } from '#lib-shared/resource/resources/EntityResource/EntityResource.models';

export type GetPaymentMethodTitleParamsModel = EntityResourcePartialModel<PaymentMethodModel>;

export type GetPaymentMethodTitleModel = TranslatableTextModel;
