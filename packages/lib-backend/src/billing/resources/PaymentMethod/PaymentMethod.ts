import { Bank } from '#lib-backend/billing/resources/Bank/Bank';
import { Card } from '#lib-backend/billing/resources/Card/Card';
import { Union } from '#lib-backend/resource/utils/Union/Union';
import {
  PAYMENT_METHOD_RESOURCE_NAME,
  PAYMENT_METHOD_TYPE,
} from '#lib-shared/billing/resources/PaymentMethod/PaymentMethod.constants';
import type { PaymentMethodModel } from '#lib-shared/billing/resources/PaymentMethod/PaymentMethod.models';

export const PaymentMethod = Union<PaymentMethodModel>({
  Resource: [Bank, Card],
  name: PAYMENT_METHOD_RESOURCE_NAME,
  resolve: (value) => {
    switch (value.type) {
      case PAYMENT_METHOD_TYPE.BANK:
        return Bank;
      case PAYMENT_METHOD_TYPE.CARD:
        return Card;
      default:
        return undefined;
    }
  },
});
