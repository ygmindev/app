import type { BankServiceModel } from '@lib/shared/billing/resources/Bank/BankService/BankService.models';

export interface UseBankResourceModel
  extends Pick<BankServiceModel, 'get'> {}
