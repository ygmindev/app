import type { PaymentMethodServiceModel } from '@lib/shared/billing/resources/PaymentMethod/PaymentMethodService/PaymentMethodService.models';

export interface UsePaymentMethodResourceModel
  extends Pick<PaymentMethodServiceModel, 'createToken' | 'getMany'> {}
