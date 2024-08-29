import { Bank } from '@lib/backend/billing/resources/Bank/Bank';
import { getFingerprintInput } from '@lib/backend/billing/utils/getFingerprintInput/getFingerprintInput';
import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { createEmbeddedResourceImplementation } from '@lib/backend/resource/utils/createEmbeddedResourceImplementation/createEmbeddedResourceImplementation';
import { UserImplementation } from '@lib/backend/user/resources/User/UserImplementation/UserImplementation';
import { BANK_RESOURCE_NAME } from '@lib/shared/billing/resources/Bank/Bank.constants';
import { type BankFormModel, type BankModel } from '@lib/shared/billing/resources/Bank/Bank.models';
import { type BankImplementationModel } from '@lib/shared/billing/resources/Bank/BankImplementation/BankImplementation.models';
import { PAYMENT_METHOD_TYPE } from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.constants';
import { type UserFormModel, type UserModel } from '@lib/shared/user/resources/User/User.models';

@withContainer()
export class BankImplementation
  extends createEmbeddedResourceImplementation<BankModel, BankFormModel, UserModel, UserFormModel>({
    Resource: Bank,
    RootImplementation: UserImplementation,
    beforeCreate: async ({ input }) =>
      input && getFingerprintInput({ input, type: PAYMENT_METHOD_TYPE.BANK }),
    name: BANK_RESOURCE_NAME,
  })
  implements BankImplementationModel {}
