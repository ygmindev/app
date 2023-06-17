import type { UseResourceMethodHookParamsModel } from '#lib-frontend/resource/hooks/useResourceMethod/useResourceMethod.models';
import type { BankServiceModel } from '#lib-shared/billing/resources/Bank/BankService/BankService.models';
import type { UserModel } from '#lib-shared/user/resources/User/User.models';

export type UseBankResourceParamsModel = UseResourceMethodHookParamsModel<UserModel>;

export type UseBankResourceModel = Pick<BankServiceModel, 'create' | 'get' | 'update' | 'remove'>;
