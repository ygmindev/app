import { type PaymentMethodFormModel } from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.models';

export type _PaymentMethodInputPropsModel = {
  items?: Array<string>;
  onChange?(params: { isComplete?: boolean }): void;
  onCreate?(form?: PaymentMethodFormModel): Promise<void>;
  price?: number;
  redirectTo?: string;
  token: string;
};

export type _PaymentMethodInputRefModel = {
  submit(): Promise<void>;
};
