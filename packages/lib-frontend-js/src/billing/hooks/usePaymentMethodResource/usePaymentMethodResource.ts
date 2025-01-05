import {
  type UsePaymentMethodResourceModel,
  type UsePaymentMethodResourceParamsModel,
} from '@lib/frontend/billing/hooks/usePaymentMethodResource/usePaymentMethodResource.models';
import { PAYMENT_METHOD_RESOURCE_PARAMS } from '@lib/frontend/billing/resources/PaymentMethod/PaymentMethod.constants';
import { useResource } from '@lib/frontend/resource/hooks/useResource/useResource';
import { useResourceMethod } from '@lib/frontend/resource/hooks/useResourceMethod/useResourceMethod';
import { PAYMENT_METHOD_RESOURCE_NAME } from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.constants';
import {
  type PaymentMethodFormModel,
  type PaymentMethodModel,
} from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.models';
import { type PaymentArgsModel } from '@lib/shared/billing/utils/PaymentArgs/PaymentArgs.models';
import { RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
import { type IdArgsModel } from '@lib/shared/resource/utils/IdArgs/IdArgs.models';
import { type UserModel } from '@lib/shared/user/resources/User/User.models';

export const usePaymentMethodResource = ({
  root,
}: UsePaymentMethodResourceParamsModel = {}): UsePaymentMethodResourceModel => {
  const { query: createToken } = useResourceMethod<
    RESOURCE_METHOD_TYPE.CREATE,
    string,
    PaymentArgsModel,
    UserModel
  >({
    fields: ['result'],
    method: RESOURCE_METHOD_TYPE.CREATE,
    name: `${PAYMENT_METHOD_RESOURCE_NAME}Token`,
    root,
  });

  const { query: removeToken } = useResourceMethod<
    RESOURCE_METHOD_TYPE.REMOVE,
    boolean,
    IdArgsModel,
    UserModel
  >({
    fields: ['result'],
    method: RESOURCE_METHOD_TYPE.REMOVE,
    name: `${PAYMENT_METHOD_RESOURCE_NAME}Token`,
    root,
  });

  return {
    ...useResource<PaymentMethodModel, PaymentMethodFormModel, UserModel>({
      ...PAYMENT_METHOD_RESOURCE_PARAMS,
      root,
    }),
    createToken,
    removeToken,
  };
};
