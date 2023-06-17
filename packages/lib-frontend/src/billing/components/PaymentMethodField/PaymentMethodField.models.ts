import type { _PaymentMethodFieldPropsModel } from '#lib-frontend/billing/components/PaymentMethodField/_PaymentMethodField.models';

export type PaymentMethodFieldPropsModel = Omit<
  _PaymentMethodFieldPropsModel,
  'onCreate' | 'onCardUpdate'
>;
