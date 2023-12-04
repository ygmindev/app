import { type UsePaymentMethodResourceModel } from '#lib-frontend/billing/hooks/usePaymentMethodResource/usePaymentMethodResource.models';
import { PAYMENT_METHOD_RESOURCE_PARAMS } from '#lib-frontend/billing/resources/PaymentMethod/PaymentMethod.constants';
import { useResource } from '#lib-frontend/resource/hooks/useResource/useResource';
import { useResourceMethod } from '#lib-frontend/resource/hooks/useResourceMethod/useResourceMethod';
import { PAYMENT_METHOD_RESOURCE_NAME } from '#lib-shared/billing/resources/PaymentMethod/PaymentMethod.constants';
import {
  type PaymentMethodFormModel,
  type PaymentMethodModel,
} from '#lib-shared/billing/resources/PaymentMethod/PaymentMethod.models';
import { RESOURCE_METHOD_TYPE } from '#lib-shared/resource/resource.constants';
import { USER_RESOURCE_NAME } from '#lib-shared/user/resources/User/User.constants';
import { type UserModel } from '#lib-shared/user/resources/User/User.models';

export const usePaymentMethodResource = (): UsePaymentMethodResourceModel => {
  const { query: createToken } = useResourceMethod<
    RESOURCE_METHOD_TYPE.CREATE,
    string,
    undefined,
    UserModel
  >({
    fields: ['result'],
    method: RESOURCE_METHOD_TYPE.CREATE,
    name: `${PAYMENT_METHOD_RESOURCE_NAME}Token`,
    root: USER_RESOURCE_NAME,
  });
  return {
    ...useResource<PaymentMethodModel, PaymentMethodFormModel, UserModel>({
      ...PAYMENT_METHOD_RESOURCE_PARAMS,
    }),
    createToken,
  };
};
