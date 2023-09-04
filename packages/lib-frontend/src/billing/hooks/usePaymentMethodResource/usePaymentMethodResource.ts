import { PAYMENT_METHOD_OUTPUT_FIELDS } from '#lib-frontend/billing/hooks/usePaymentMethodResource/usePaymentMethodResource.constants';
import {
  type UsePaymentMethodResourceModel,
  type UsePaymentMethodResourceParamsModel,
} from '#lib-frontend/billing/hooks/usePaymentMethodResource/usePaymentMethodResource.models';
import { useResource } from '#lib-frontend/resource/hooks/useResource/useResource';
import { useResourceMethod } from '#lib-frontend/resource/hooks/useResourceMethod/useResourceMethod';
import { PAYMENT_METHOD_RESOURCE_NAME } from '#lib-shared/billing/resources/PaymentMethod/PaymentMethod.constants';
import {
  type PaymentMethodFormModel,
  type PaymentMethodModel,
} from '#lib-shared/billing/resources/PaymentMethod/PaymentMethod.models';
import { RESOURCE_METHOD_TYPE } from '#lib-shared/resource/resource.constants';
import { type UserModel } from '#lib-shared/user/resources/User/User.models';

export const usePaymentMethodResource = ({
  root,
}: UsePaymentMethodResourceParamsModel = {}): UsePaymentMethodResourceModel => {
  const result = useResource<PaymentMethodModel, PaymentMethodFormModel, UserModel>({
    fields: [{ result: PAYMENT_METHOD_OUTPUT_FIELDS }],
    name: PAYMENT_METHOD_RESOURCE_NAME,
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
    ...result,
    createToken,
  };
};
