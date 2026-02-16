import { type RequestContextModel } from '@lib/config/api/api.models';
import { type PaymentInputModel } from '@lib/model/billing/PaymentInput/PaymentInput.models';
import { type PaymentMethodModel } from '@lib/model/billing/PaymentMethod/PaymentMethod.models';
import { type IdInputModel } from '@lib/model/resource/IdInput/IdInput.models';
import { type PartialArrayModel } from '@lib/shared/core/core.models';

export type PaymentMethodImplementationModel = {
  createToken(input: PaymentInputModel, context?: RequestContextModel): Promise<string>;

  getAll(context?: RequestContextModel): Promise<PartialArrayModel<PaymentMethodModel>>;

  removeToken(input: IdInputModel, context?: RequestContextModel): Promise<boolean>;
};
