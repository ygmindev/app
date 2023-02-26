import { withResolver } from '@lib/backend/http/decorators/withResolver/withResolver';
import { EntityResourceResolver } from '@lib/backend/resource/resources/EntityResource/EntityResourceResolver/EntityResourceResolver';
import type { EntityResourceResolverModel } from '@lib/backend/resource/resources/EntityResource/EntityResourceResolver/EntityResourceResolver.models';
import { Account } from '@lib/backend/user/resources/Account/Account';
import { AccountService } from '@lib/backend/user/resources/Account/AccountService/AccountService';
import { withContainer } from '@lib/shared/core/decorators/withContainer/withContainer';
import { ACCOUNT_RESOURCE_NAME } from '@lib/shared/user/resources/Account/Account.constants';
import type {
  AccountFormModel,
  AccountModel,
} from '@lib/shared/user/resources/Account/Account.models';

@withContainer()
@withResolver({ Resource: Account })
export class AccountResolver
  extends EntityResourceResolver<AccountModel, AccountFormModel>({
    Resource: Account,
    ResourceService: AccountService,
    name: ACCOUNT_RESOURCE_NAME,
  })
  implements EntityResourceResolverModel<AccountModel, AccountFormModel> {}
