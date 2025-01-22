import { type NewPaymentMethodInputRefModel } from '@lib/frontend/billing/components/NewPaymentMethodInput/NewPaymentMethodInput.models';
import { type InputPropsModel } from '@lib/frontend/data/data.models';

export type PaymentMethodInputPropsModel = InputPropsModel & {
  isEditable?: boolean;
};

export type PaymentMethodInputRefModel = NewPaymentMethodInputRefModel;
