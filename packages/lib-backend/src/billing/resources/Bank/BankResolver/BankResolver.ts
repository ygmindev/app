import { selfAuthorizer } from '@lib/backend/auth/utils/selfAuthorizer/selfAuthorizer';
import { Bank } from '@lib/backend/billing/resources/Bank/Bank';
import { BankService } from '@lib/backend/billing/resources/Bank/BankService/BankService';
import { withResolver } from '@lib/backend/http/decorators/withResolver/withResolver';
import { EmbeddedResourceResolver } from '@lib/backend/resource/resources/EmbeddedResource/EmbeddedResourceResolver/EmbeddedResourceResolver';
import { User } from '@lib/backend/user/resources/User/User';
import { ACCESS_LEVEL } from '@lib/shared/auth/resources/Access/Access.constants';
import { BANK_RESOURCE_NAME } from '@lib/shared/billing/resources/Bank/Bank.constants';
import type { BankFormModel, BankModel } from '@lib/shared/billing/resources/Bank/Bank.models';
import type { BankServiceModel } from '@lib/shared/billing/resources/Bank/BankService/BankService.models';
import { withContainer } from '@lib/shared/core/decorators/withContainer/withContainer';
import type { UserModel } from '@lib/shared/user/resources/User/User.models';

@withContainer()
@withResolver({ Resource: Bank })
export class BankResolver
  extends EmbeddedResourceResolver<BankModel, BankFormModel, UserModel>({
    Resource: Bank,
    ResourceService: BankService,
    RootResource: User,
    authorizer: selfAuthorizer,
    name: BANK_RESOURCE_NAME,
    writeAccess: ACCESS_LEVEL.PROTECTED,
  })
  implements BankServiceModel {}
