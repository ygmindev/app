import type { EntityResourceServiceModel } from '@lib/shared/resource/resources/EntityResource/EntityResourceService/EntityResourceService.models';
import type {
  AccountModel,
  AccountFormModel,
} from '@lib/shared/user/resources/Account/Account.models';

export interface AccountServiceModel
  extends EntityResourceServiceModel<AccountModel, AccountFormModel> {}
