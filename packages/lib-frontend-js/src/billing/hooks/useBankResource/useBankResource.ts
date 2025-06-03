import {
  type UseBankResourceModel,
  type UseBankResourceParamsModel,
} from '@lib/frontend/billing/hooks/useBankResource/useBankResource.models';
import { BANK_RESOURCE_PARAMS } from '@lib/frontend/billing/resources/Bank/Bank.constants';
import { useActions } from '@lib/frontend/state/hooks/useActions/useActions';
import { useOwnResource } from '@lib/frontend/user/hooks/useOwnResource/useOwnResource';
import { type BankModel } from '@lib/shared/billing/resources/Bank/Bank.models';

export const useBankResource = ({
  root,
}: UseBankResourceParamsModel = {}): UseBankResourceModel => {
  const actions = useActions();
  return useOwnResource<BankModel>({
    ...BANK_RESOURCE_PARAMS,
    afterRemove: async ({ input, output }) => {
      input?.id?.forEach((v) => actions?.billing.paymentMethodsRemove({ _id: v }));
      return output;
    },
    root,
  });
};
