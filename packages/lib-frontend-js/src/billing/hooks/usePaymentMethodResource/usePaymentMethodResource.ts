import { type UsePaymentMethodResourceModel } from '@lib/frontend/billing/hooks/usePaymentMethodResource/usePaymentMethodResource.models';
import { useAppGraphql } from '@lib/frontend/data/hooks/useAppGraphql/useAppGraphql';
import {
  CREATE_TOKEN,
  REMOVE_TOKEN,
} from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.constants';
import { PAYMENT_INPUT } from '@lib/shared/billing/utils/PaymentInput/PaymentInput.constants';
import { type PaymentInputModel } from '@lib/shared/billing/utils/PaymentInput/PaymentInput.models';
import { ID_INPUT } from '@lib/shared/resource/utils/IdInput/IdInput.constants';
import { type IdInputModel } from '@lib/shared/resource/utils/IdInput/IdInput.models';

export const usePaymentMethodResource = (): UsePaymentMethodResourceModel => {
  const { query } = useAppGraphql();

  return {
    createToken: async (input) => {
      const output = await query<string, { input: PaymentInputModel }>({
        fields: [],
        name: CREATE_TOKEN,
        params: { input: PAYMENT_INPUT },
        variables: { input },
      });
      return output ?? '';
    },

    getAll: async () => {
      return [];
    },

    removeToken: async (input) => {
      const output = await query<boolean, { input: IdInputModel }>({
        fields: [],
        name: REMOVE_TOKEN,
        params: { input: ID_INPUT },
        variables: { input },
      });
      return output ?? false;
    },
  };
};
