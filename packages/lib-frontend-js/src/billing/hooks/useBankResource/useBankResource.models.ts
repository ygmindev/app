import { type UseResourceModel } from '@lib/frontend/resource/hooks/useResource/useResource.models';
import { type UseResourceQueryHookParamsModel } from '@lib/frontend/resource/hooks/useResourceQuery/useResourceQuery.models';
import { type BankModel } from '@lib/model/billing/Bank/Bank.models';
import { type UserModel } from '@lib/model/user/User/User.models';

export type UseBankResourceParamsModel = UseResourceQueryHookParamsModel<UserModel>;

export type UseBankResourceModel = UseResourceModel<BankModel>;
