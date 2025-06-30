import { type RequestContextModel } from '@lib/config/api/api.models';
import { type PaymentMethodModel } from '@lib/model/billing/PaymentMethod/PaymentMethod.models';
import { type PaymentInputModel } from '@lib/shared/billing/utils/PaymentInput/PaymentInput.models';
import { type IdInputModel } from '@lib/shared/resource/utils/IdInput/IdInput.models';

export type PaymentMethodImplementationModel = {
  createToken(input: PaymentInputModel, context?: RequestContextModel): Promise<string>;

  getAll(context?: RequestContextModel): Promise<Array<Partial<PaymentMethodModel>>>;

  removeToken(input: IdInputModel, context?: RequestContextModel): Promise<boolean>;
};
