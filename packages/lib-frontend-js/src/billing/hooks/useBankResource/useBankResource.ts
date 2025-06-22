import {
  type UseBankResourceModel,
  type UseBankResourceParamsModel,
} from '@lib/frontend/billing/hooks/useBankResource/useBankResource.models';
import { BANK_RESOURCE_PARAMS } from '@lib/frontend/billing/resources/Bank/Bank.constants';
import { useOwnResource } from '@lib/frontend/user/hooks/useOwnResource/useOwnResource';
import { type BankModel } from '@lib/shared/billing/resources/Bank/Bank.models';

export const useBankResource = ({ root }: UseBankResourceParamsModel = {}): UseBankResourceModel =>
  useOwnResource<BankModel>({
    ...BANK_RESOURCE_PARAMS,
    root,
  });
