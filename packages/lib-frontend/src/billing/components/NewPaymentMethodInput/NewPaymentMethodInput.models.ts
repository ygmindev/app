import {
  type _NewPaymentMethodInputPropsModel,
  type _NewPaymentMethodInputRefModel,
} from '@lib/frontend/billing/components/NewPaymentMethodInput/_NewPaymentMethodInput.models';

export type NewPaymentMethodInputPropsModel = Omit<
  _NewPaymentMethodInputPropsModel,
  'onCreate' | 'token'
>;

export type NewPaymentMethodInputRefModel = _NewPaymentMethodInputRefModel;
