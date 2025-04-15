// import { selfAuthorizer } from '@lib/backend/auth/utils/selfAuthorizer/selfAuthorizer';
import { Bank } from '@lib/backend/billing/resources/Bank/Bank';
import { BankImplementation } from '@lib/backend/billing/resources/Bank/BankImplementation/BankImplementation';
import { type BankResolverModel } from '@lib/backend/billing/resources/Bank/BankResolver/BankResolver.models';
import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { withResolver } from '@lib/backend/http/utils/withResolver/withResolver';
import { createEmbeddedResourceResolver } from '@lib/backend/resource/utils/createEmbeddedResourceResolver/createEmbeddedResourceResolver';
import { User } from '@lib/backend/user/resources/User/User';
import { BANK_RESOURCE_NAME } from '@lib/shared/billing/resources/Bank/Bank.constants';
import { type BankModel } from '@lib/shared/billing/resources/Bank/Bank.models';
import { type UserModel } from '@lib/shared/user/resources/User/User.models';

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
