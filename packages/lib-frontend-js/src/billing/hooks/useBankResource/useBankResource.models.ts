import { type UseResourceModel } from '@lib/frontend/resource/hooks/useResource/useResource.models';
import { type UseResourceMethodHookParamsModel } from '@lib/frontend/resource/hooks/useResourceMethod/useResourceMethod.models';
import { type BankModel } from '@lib/model/billing/Bank/Bank.models';
import { type UserModel } from '@lib/model/user/User/User.models';

export type UseBankResourceParamsModel = UseResourceMethodHookParamsModel<UserModel>;

export type UseBankResourceModel = UseResourceModel<BankModel>;
