import { type _PaymentMethodFieldPropsModel } from '#lib-frontend/billing/components/PaymentMethodField/_PaymentMethodField.models';
import { type FieldRefModel } from '#lib-frontend/data/data.models';
import { type PaymentMethodFormModel } from '#lib-shared/billing/resources/PaymentMethod/PaymentMethod.models';

export type PaymentMethodFieldPropsModel = Omit<_PaymentMethodFieldPropsModel, 'onError' | 'token'>;

export type PaymentMethodFieldRefModel = FieldRefModel<PaymentMethodFormModel>;
