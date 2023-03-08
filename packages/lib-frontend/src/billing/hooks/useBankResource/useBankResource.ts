import { BANK_FIELDS } from '@lib/frontend/billing/hooks/useBankResource/useBankResource.constants';
import type {
  UseBankResourceModel,
  UseBankResourceParamsModel,
} from '@lib/frontend/billing/hooks/useBankResource/useBankResource.models';
import { useResourceMethod } from '@lib/frontend/resource/hooks/useResourceMethod/useResourceMethod';
import { BANK_RESOURCE_NAME } from '@lib/shared/billing/resources/Bank/Bank.constants';
import type { BankFormModel, BankModel } from '@lib/shared/billing/resources/Bank/Bank.models';
import { RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
import type { UserModel } from '@lib/shared/user/resources/User/User.models';

export const useBankResource = ({
  root,
}: UseBankResourceParamsModel = {}): UseBankResourceModel => {
  const { query: get } = useResourceMethod<
    RESOURCE_METHOD_TYPE.GET,
    BankModel,
    BankFormModel,
    UserModel
  >({
    fields: [{ result: BANK_FIELDS }],
    method: RESOURCE_METHOD_TYPE.GET,
    name: BANK_RESOURCE_NAME,
    root,
  });

  const { query: create } = useResourceMethod<
    RESOURCE_METHOD_TYPE.CREATE,
    BankModel,
    BankFormModel,
    UserModel
  >({
    fields: [{ result: BANK_FIELDS }],
    method: RESOURCE_METHOD_TYPE.CREATE,
    name: BANK_RESOURCE_NAME,
    root,
  });

  const { query: remove } = useResourceMethod<
    RESOURCE_METHOD_TYPE.REMOVE,
    BankModel,
    BankFormModel,
    UserModel
  >({
    fields: [{ result: BANK_FIELDS }],
    method: RESOURCE_METHOD_TYPE.REMOVE,
    name: BANK_RESOURCE_NAME,
    root,
  });

  return {
    create,

    get,

    remove,
  };
};
