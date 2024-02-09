import {
  type PaymentMethodFormModel,
  type PaymentMethodModeModel,
} from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.models';
import { type PriceModel } from '@lib/shared/billing/utils/Price/Price.models';

export type _PaymentMethodInputPropsModel = {
  mode: PaymentMethodModeModel;
  onCreate?(form?: PaymentMethodFormModel): Promise<void>;
  price?: PriceModel;
  redirectTo?: string;
  token: string;
};

export type _PaymentMethodInputRefModel = {
  submit(): Promise<void>;
};
