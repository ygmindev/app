import type { UseResourceMethodHookParamsModel } from '@lib/frontend/resource/hooks/useResourceMethod/useResourceMethod.models';
import type { BankServiceModel } from '@lib/shared/billing/resources/Bank/BankService/BankService.models';
import type { UserModel } from '@lib/shared/user/resources/User/User.models';

export interface UseBankResourceParamsModel extends UseResourceMethodHookParamsModel<UserModel> {}

export interface UseBankResourceModel extends Pick<BankServiceModel, 'create' | 'get' | 'remove'> {}
