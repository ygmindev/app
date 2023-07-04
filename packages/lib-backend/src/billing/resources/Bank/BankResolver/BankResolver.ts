import { selfAuthorizer } from '#lib-backend/auth/utils/selfAuthorizer/selfAuthorizer';
import { Bank } from '#lib-backend/billing/resources/Bank/Bank';
import { BankService } from '#lib-backend/billing/resources/Bank/BankService/BankService';
import { withContainer } from '#lib-backend/core/utils/withContainer/withContainer';
import { withResolver } from '#lib-backend/http/utils/withResolver/withResolver';
import { createEmbeddedResourceResolver } from '#lib-backend/resource/utils/createEmbeddedResourceResolver/createEmbeddedResourceResolver';
import { User } from '#lib-backend/user/resources/User/User';
import { BANK_RESOURCE_NAME } from '#lib-shared/billing/resources/Bank/Bank.constants';
import { type BankFormModel, type BankModel } from '#lib-shared/billing/resources/Bank/Bank.models';
import { type BankServiceModel } from '#lib-shared/billing/resources/Bank/BankService/BankService.models';
import { type UserModel } from '#lib-shared/user/resources/User/User.models';

const EmbeddedResourceResolverF = createEmbeddedResourceResolver<
  BankModel,
  BankFormModel,
  UserModel
>({
  Resource: Bank,
  ResourceService: BankService,
  RootResource: User,
  authorizer: { default: selfAuthorizer },
  name: BANK_RESOURCE_NAME,
});

@withContainer()
@withResolver({ Resource: Bank })
export class BankResolver extends EmbeddedResourceResolverF implements BankServiceModel {}
