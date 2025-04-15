import { type UsePaymentMethodResourceModel } from '@lib/frontend/billing/hooks/usePaymentMethodResource/usePaymentMethodResource.models';
import { useAppGraphql } from '@lib/frontend/data/hooks/useAppGraphql/useAppGraphql';
import { CREATE_TOKEN } from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.constants';
import { PAYMENT_ARGS } from '@lib/shared/billing/utils/PaymentArgs/PaymentArgs.constants';
import { type PaymentArgsModel } from '@lib/shared/billing/utils/PaymentArgs/PaymentArgs.models';

export const usePaymentMethodResource = (): UsePaymentMethodResourceModel => {
  const { query } = useAppGraphql();

  return {
    createToken: async (input) => {
      const output = await query<string, { input: PaymentArgsModel }>({
        fields: [],
        name: CREATE_TOKEN,
        params: { input: PAYMENT_ARGS },
        variables: { input },
      });
    },
    getAll,
    removeToken,
  };
};
