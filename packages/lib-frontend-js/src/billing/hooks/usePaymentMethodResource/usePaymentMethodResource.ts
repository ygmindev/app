import { type UsePaymentMethodResourceModel } from '@lib/frontend/billing/hooks/usePaymentMethodResource/usePaymentMethodResource.models';
import { PAYMENT_METHOD_RESOURCE_PARAMS } from '@lib/frontend/billing/resources/PaymentMethod/PaymentMethod.constants';
import { useAppGraphql } from '@lib/frontend/data/hooks/useAppGraphql/useAppGraphql';
import {
  CREATE_TOKEN,
  PAYMENT_METHOD_GET_ALL,
  REMOVE_TOKEN,
} from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.constants';
import { type PaymentMethodModel } from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.models';
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
      const output = await query<Array<Partial<PaymentMethodModel>>, undefined>({
        fields: PAYMENT_METHOD_RESOURCE_PARAMS.fields.map((v) => v.id),
        name: PAYMENT_METHOD_GET_ALL,
      });
      return output ?? [];
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
