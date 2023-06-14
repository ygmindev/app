import type { _PaymentMethodFieldPropsModel } from '#lib-frontend/billing/components/PaymentMethodField/_PaymentMethodField.models';

export interface PaymentMethodFieldPropsModel
  extends Omit<_PaymentMethodFieldPropsModel, 'onCreate' | 'onCardUpdate'> {}
