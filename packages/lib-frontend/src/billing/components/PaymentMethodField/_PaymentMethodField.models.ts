import { type FieldPropsModel } from '#lib-frontend/data/data.models';
import { type PaymentMethodFormModel } from '#lib-shared/billing/resources/PaymentMethod/PaymentMethod.models';

export type _PaymentMethodFieldPropsModel = FieldPropsModel<PaymentMethodFormModel> & {
  onError(error: Error): void;
  token?: string;
};
