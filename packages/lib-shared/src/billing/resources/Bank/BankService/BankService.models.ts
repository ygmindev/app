import type { BankFormModel, BankModel } from '@lib/shared/billing/resources/Bank/Bank.models';
import type { EmbeddedResourceServiceModel } from '@lib/shared/resource/resources/EmbeddedResource/EmbeddedResourceService/EmbeddedResourceService.models';
import type { UserModel } from '@lib/shared/user/resources/User/User.models';

export interface BankServiceModel
  extends EmbeddedResourceServiceModel<BankModel, BankFormModel, UserModel> {}