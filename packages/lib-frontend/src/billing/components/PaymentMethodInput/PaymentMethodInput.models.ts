import {
  type _PaymentMethodInputPropsModel,
  type _PaymentMethodInputRefModel,
} from '@lib/frontend/billing/components/PaymentMethodInput/_PaymentMethodInput.models';

export type PaymentMethodInputPropsModel = Omit<_PaymentMethodInputPropsModel, 'onSetup' | 'token'>;

export type PaymentMethodInputRefModel = _PaymentMethodInputRefModel;
