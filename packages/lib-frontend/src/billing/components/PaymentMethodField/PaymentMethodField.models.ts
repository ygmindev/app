import { type _PaymentMethodFieldPropsModel } from '#lib-frontend/billing/components/PaymentMethodField/_PaymentMethodField.models';
import { type FieldRefModel } from '#lib-frontend/data/data.models';
import { type CardFormModel } from '#lib-shared/billing/resources/Card/Card.models';

export type PaymentMethodFieldPropsModel = Omit<_PaymentMethodFieldPropsModel, 'token'>;

export type PaymentMethodFieldRefModel = FieldRefModel<CardFormModel>;
