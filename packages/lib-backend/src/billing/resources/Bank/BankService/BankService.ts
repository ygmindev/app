import { withContainer } from '#lib-backend/core/decorators/withContainer/withContainer';
import { EmbeddedResourceService } from '#lib-backend/resource/resources/EmbeddedResource/EmbeddedResourceService/EmbeddedResourceService';
import { UserService } from '#lib-backend/user/resources/User/UserService/UserService';
import { BANK_RESOURCE_NAME } from '#lib-shared/billing/resources/Bank/Bank.constants';
import type { BankFormModel, BankModel } from '#lib-shared/billing/resources/Bank/Bank.models';
import type { BankServiceModel } from '#lib-shared/billing/resources/Bank/BankService/BankService.models';
import type { UserFormModel, UserModel } from '#lib-shared/user/resources/User/User.models';

@withContainer()
export class BankService
  extends EmbeddedResourceService<BankModel, BankFormModel, UserModel, UserFormModel>({
    RootService: UserService,
    name: BANK_RESOURCE_NAME,
  })
  implements BankServiceModel {}
