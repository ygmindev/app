import { type UseResourceMethodHookParamsModel } from '@lib/frontend/resource/hooks/useResourceMethod/useResourceMethod.models';
import { type BankImplementationModel } from '@lib/shared/billing/resources/Bank/BankImplementation/BankImplementation.models';
import { type UserModel } from '@lib/shared/user/resources/User/User.models';

export type UseBankResourceParamsModel = UseResourceMethodHookParamsModel<UserModel>;

export type UseBankResourceModel = Pick<
  BankImplementationModel,
  'create' | 'get' | 'update' | 'remove'
>;
