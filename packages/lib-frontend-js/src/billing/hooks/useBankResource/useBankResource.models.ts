import { type UseResourceMethodHookParamsModel } from '@lib/frontend/resource/hooks/useResourceMethod/useResourceMethod.models';
import { type BankImplementationModel } from '@lib/model/billing/Bank/BankImplementation/BankImplementation.models';
import { type UserModel } from '@lib/model/user/User/User.models';

export type UseBankResourceParamsModel = UseResourceMethodHookParamsModel<UserModel>;

export type UseBankResourceModel = Pick<
  BankImplementationModel,
  'create' | 'get' | 'update' | 'remove'
>;
