import {
  type UseBankResourceModel,
  type UseBankResourceParamsModel,
} from '@lib/frontend/billing/hooks/useBankResource/useBankResource.models';
import { BANK_RESOURCE_PARAMS } from '@lib/frontend/billing/resources/Bank/Bank.constants';
import { useActions } from '@lib/frontend/state/hooks/useActions/useActions';
import { useOwnResource } from '@lib/frontend/user/hooks/useOwnResource/useOwnResource';
import { type BankFormModel, type BankModel } from '@lib/shared/billing/resources/Bank/Bank.models';

export const useBankResource = ({
  root,
}: UseBankResourceParamsModel = {}): UseBankResourceModel => {
  const actions = useActions();
  return useOwnResource<BankModel, BankFormModel>({
    ...BANK_RESOURCE_PARAMS,
    afterRemove: async ({ output }) => {
      actions?.billing.paymentMethodsRemove({ _id: output.result?._id });
      return output;
    },
    root,
  });
};
