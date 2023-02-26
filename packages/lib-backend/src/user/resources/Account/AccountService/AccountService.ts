import { EntityResourceService } from '@lib/backend/resource/resources/EntityResource/EntityResourceService/EntityResourceService';
import { ACCOUNT_RESOURCE_NAME } from '@lib/shared/user/resources/Account/Account.constants';
import type {
  AccountModel,
  AccountFormModel,
} from '@lib/shared/user/resources/Account/Account.models';
import type { AccountServiceModel } from '@lib/shared/user/resources/Account/AccountService/AccountService.models';
import { withContainer } from '@lib/shared/core/decorators/withContainer/withContainer';

@withContainer({ name: `${ACCOUNT_RESOURCE_NAME}Service` })
export class AccountService
  extends EntityResourceService<AccountModel, AccountFormModel>({
    name: ACCOUNT_RESOURCE_NAME,
  })
  implements AccountServiceModel {}
