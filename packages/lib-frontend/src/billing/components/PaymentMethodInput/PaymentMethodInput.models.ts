import {
  type _PaymentMethodInputPropsModel,
  type _PaymentMethodInputRefModel,
} from '@lib/frontend/billing/components/PaymentMethodInput/_PaymentMethodInput.models';

export type PaymentMethodInputPropsModel = Omit<
  _PaymentMethodInputPropsModel,
  'onCreate' | 'token'
>;

export type PaymentMethodInputRefModel = _PaymentMethodInputRefModel;
