import { useResourceMethod } from '@lib/frontend/resource/hooks/useResourceMethod/useResourceMethod';
import { BANK_FIELDS } from '@lib/frontend/billing/hooks/useBankResource/useBankResource.constants';
import type { UseBankResourceModel } from '@lib/frontend/billing/hooks/useBankResource/useBankResource.models';
import { RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
import { BANK_RESOURCE_NAME } from '@lib/shared/billing/resources/Bank/Bank.constants';
import type { BankFormModel, BankModel } from '@lib/shared/billing/resources/Bank/Bank.models';
import type { UserModel } from '@lib/shared/user/resources/User/User.models';

export const useBankResource = (): UseBankResourceModel => {
  const { query: get } = useResourceMethod<
    RESOURCE_METHOD_TYPE.GET,
    BankModel,
    BankFormModel,
    UserModel,
  >({
    fields: [{ result: BANK_FIELDS }],
    method: RESOURCE_METHOD_TYPE.GET,
    name: BANK_RESOURCE_NAME,
  });

  return {
    get,
  };
};
