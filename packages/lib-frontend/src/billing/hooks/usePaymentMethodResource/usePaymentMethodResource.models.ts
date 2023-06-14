import type { PaymentMethodServiceModel } from '#lib-shared/billing/resources/PaymentMethod/PaymentMethodService/PaymentMethodService.models';
import type { UserModel } from '#lib-shared/user/resources/User/User.models';

import type { UseResourceMethodHookParamsModel } from '#lib-frontend/resource/hooks/useResourceMethod/useResourceMethod.models';

export interface UsePaymentMethodResourceParamsModel
  extends UseResourceMethodHookParamsModel<UserModel> {}

export interface UsePaymentMethodResourceModel
  extends Pick<PaymentMethodServiceModel, 'createToken' | 'getMany'> {}
