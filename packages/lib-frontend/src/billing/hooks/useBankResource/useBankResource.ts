import { type UseBankResourceModel } from '#lib-frontend/billing/hooks/useBankResource/useBankResource.models';
import { BANK_RESOURCE_PARAMS } from '#lib-frontend/billing/resources/Bank/Bank.constants';
import { useResource } from '#lib-frontend/resource/hooks/useResource/useResource';
import { type UseResourceMethodHookParamsModel } from '#lib-frontend/resource/hooks/useResourceMethod/useResourceMethod.models';
import { type BankFormModel, type BankModel } from '#lib-shared/billing/resources/Bank/Bank.models';
import { type UserModel } from '#lib-shared/user/resources/User/User.models';

export const useBankResource = ({
  root,
}: UseResourceMethodHookParamsModel = {}): UseBankResourceModel =>
  useResource<BankModel, BankFormModel, UserModel>({
    ...BANK_RESOURCE_PARAMS,
    root,
  });
