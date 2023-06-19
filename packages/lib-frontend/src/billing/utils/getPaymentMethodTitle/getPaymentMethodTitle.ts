import type {
  GetPaymentMethodTitleModel,
  GetPaymentMethodTitleParamsModel,
} from '#lib-frontend/billing/utils/getPaymentMethodTitle/getPaymentMethodTitle.models';
import { PAYMENT_METHOD_TYPE } from '#lib-shared/billing/resources/PaymentMethod/PaymentMethod.constants';

export const getPaymentMethodTitle =
  (params?: GetPaymentMethodTitleParamsModel): GetPaymentMethodTitleModel =>
  ({ t }) =>
    t('billing:endingIn', {
      type:
        params?.type === PAYMENT_METHOD_TYPE.BANK
          ? t('billing:bank')
          : params?.type === PAYMENT_METHOD_TYPE.CARD
          ? t('billing:card')
          : '',
      value: params?.last4,
    });
