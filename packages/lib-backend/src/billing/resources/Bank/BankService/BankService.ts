import { Bank } from '@lib/backend/billing/resources/Bank/Bank';
import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { createEmbeddedResourceService } from '@lib/backend/resource/utils/createEmbeddedResourceService/createEmbeddedResourceService';
import { UserService } from '@lib/backend/user/resources/User/UserService/UserService';
import { BANK_RESOURCE_NAME } from '@lib/shared/billing/resources/Bank/Bank.constants';
import { type BankFormModel, type BankModel } from '@lib/shared/billing/resources/Bank/Bank.models';
import { type BankServiceModel } from '@lib/shared/billing/resources/Bank/BankService/BankService.models';
import { type UserFormModel, type UserModel } from '@lib/shared/user/resources/User/User.models';

@withContainer()
export class BankService
  extends createEmbeddedResourceService<BankModel, BankFormModel, UserModel, UserFormModel>({
    Resource: Bank,
    RootService: UserService,
    name: BANK_RESOURCE_NAME,
  })
  implements BankServiceModel {}
