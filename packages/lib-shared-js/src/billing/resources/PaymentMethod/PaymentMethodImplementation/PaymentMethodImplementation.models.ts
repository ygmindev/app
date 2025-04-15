import { type RequestContextModel } from '@lib/config/api/api.models';
import { type PaymentMethodModel } from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.models';
import { type PaymentArgsModel } from '@lib/shared/billing/utils/PaymentArgs/PaymentArgs.models';
import { type IdArgsModel } from '@lib/shared/resource/utils/IdArgs/IdArgs.models';

export type PaymentMethodImplementationModel = {
  createToken(input: PaymentArgsModel, context?: RequestContextModel): Promise<string>;

  getAll(context?: RequestContextModel): Promise<Array<Partial<PaymentMethodModel>>>;

  removeToken(input: IdArgsModel, context?: RequestContextModel): Promise<boolean>;
};
