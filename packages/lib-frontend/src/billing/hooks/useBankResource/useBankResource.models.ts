import { type UseResourceMethodHookParamsModel } from '@lib-frontend/resource/hooks/useResourceMethod/useResourceMethod.models';
import { type BankServiceModel } from '@lib-shared/billing/resources/Bank/BankService/BankService.models';

export type UseBankResourceParamsModel = UseResourceMethodHookParamsModel;

export type UseBankResourceModel = Pick<BankServiceModel, 'create' | 'get' | 'update' | 'remove'>;
