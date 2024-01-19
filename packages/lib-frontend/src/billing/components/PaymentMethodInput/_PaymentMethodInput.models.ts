import { type InputPropsModel } from '@lib/frontend/data/data.models';
import { type PaymentMethodFormModel } from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.models';

export type _PaymentMethodInputPropsModel = InputPropsModel<PaymentMethodFormModel> & {
  onError(error: Error): void;
  token?: string;
};
