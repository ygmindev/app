import { type PaymentMethodModeModel } from '@lib/frontend/billing/containers/PaymentMethodContainer/PaymentMethodContainer.models';
import { type ChildrenPropsModel } from '@lib/frontend/core/core.models';
import { type PaymentMethodFormModel } from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.models';
import { type PriceModel } from '@lib/shared/billing/resources/Price/Price.models';

export type _PaymentMethodContainerPropsModel = ChildrenPropsModel & {
  mode: PaymentMethodModeModel;
  onSetup?(form?: PaymentMethodFormModel): Promise<void>;
  price?: PriceModel;
  redirect: string;
  token: string;
};

export type _PaymentMethodContainerRefModel = {
  submit(): Promise<void>;
};
