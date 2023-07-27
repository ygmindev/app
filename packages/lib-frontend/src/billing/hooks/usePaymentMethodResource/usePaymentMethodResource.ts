import { BANK_FIELDS } from '#lib-frontend/billing/hooks/useBankResource/useBankResource.constants';
import { CARD_FIELDS } from '#lib-frontend/billing/hooks/useCardResource/useCardResource.constants';
import {
  type UsePaymentMethodResourceModel,
  type UsePaymentMethodResourceParamsModel,
} from '#lib-frontend/billing/hooks/usePaymentMethodResource/usePaymentMethodResource.models';
import { useResourceMethod } from '#lib-frontend/resource/hooks/useResourceMethod/useResourceMethod';
import { BANK_RESOURCE_NAME } from '#lib-shared/billing/resources/Bank/Bank.constants';
import { CARD_RESOURCE_NAME } from '#lib-shared/billing/resources/Card/Card.constants';
import { PAYMENT_METHOD_RESOURCE_NAME } from '#lib-shared/billing/resources/PaymentMethod/PaymentMethod.constants';
import { type PaymentMethodModel } from '#lib-shared/billing/resources/PaymentMethod/PaymentMethod.models';
import { RESOURCE_METHOD_TYPE } from '#lib-shared/resource/resource.constants';
import { type UserModel } from '#lib-shared/user/resources/User/User.models';

export const usePaymentMethodResource = ({
  root,
}: UsePaymentMethodResourceParamsModel = {}): UsePaymentMethodResourceModel => {
  const { query: getMany } = useResourceMethod<
    RESOURCE_METHOD_TYPE.GET_MANY,
    PaymentMethodModel,
    undefined,
    UserModel
  >({
    fields: [
      {
        result: {
          [BANK_RESOURCE_NAME]: BANK_FIELDS,
          [CARD_RESOURCE_NAME]: CARD_FIELDS,
        },
      },
    ],
    method: RESOURCE_METHOD_TYPE.GET_MANY,
    name: PAYMENT_METHOD_RESOURCE_NAME,
    root,
  });

  const { query: createToken } = useResourceMethod<
    RESOURCE_METHOD_TYPE.CREATE,
    string,
    undefined,
    UserModel
  >({
    fields: ['result'],
    method: RESOURCE_METHOD_TYPE.CREATE,
    name: `${PAYMENT_METHOD_RESOURCE_NAME}Token`,
    root,
  });

  return {
    createToken,

    getMany,
  };
};
