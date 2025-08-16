// import { selfAuthorizer } from '@lib/backend/auth/utils/selfAuthorizer/selfAuthorizer';
import { Bank } from '@lib/model/billing/Bank/Bank.entity';
import { BankImplementation } from '@lib/model/billing/Bank/BankImplementation/BankImplementation';
import { type BankResolverModel } from '@lib/model/billing/Bank/BankResolver/BankResolver.models';
import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { withResolver } from '@lib/backend/http/utils/withResolver/withResolver';
import { createEmbeddedResourceResolver } from '@lib/backend/resource/utils/createEmbeddedResourceResolver/createEmbeddedResourceResolver';
import { User } from '@lib/model/user/User/User.entity';
import { BANK_RESOURCE_NAME } from '@lib/model/billing/Bank/Bank.constants';
import { type BankModel } from '@lib/model/billing/Bank/Bank.models';
import { type UserModel } from '@lib/model/user/User/User.models';

@withContainer()
@withResolver({ Resource: () => Bank })
export class BankResolver
  extends createEmbeddedResourceResolver<BankModel, UserModel>({
    Resource: () => Bank,
    ResourceImplementation: BankImplementation,
    RootResource: () => User,
    // authorizer: { default: selfAuthorizer },
    name: BANK_RESOURCE_NAME,
  })
  implements BankResolverModel {}
