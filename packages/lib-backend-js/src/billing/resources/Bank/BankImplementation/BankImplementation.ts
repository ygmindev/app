import { Bank } from '@lib/backend/billing/resources/Bank/Bank';
import { getFingerprintInput } from '@lib/backend/billing/utils/getFingerprintInput/getFingerprintInput';
import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { createRelatedResourceImplementation } from '@lib/backend/resource/utils/createRelatedResourceImplementation/createRelatedResourceImplementation';
import { UserImplementation } from '@lib/backend/user/resources/User/UserImplementation/UserImplementation';
import { BANK_RESOURCE_NAME } from '@lib/shared/billing/resources/Bank/Bank.constants';
import { type BankFormModel, type BankModel } from '@lib/shared/billing/resources/Bank/Bank.models';
import { type BankImplementationModel } from '@lib/shared/billing/resources/Bank/BankImplementation/BankImplementation.models';
import { PAYMENT_METHOD_TYPE } from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.constants';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { USER_RESOURCE_NAME } from '@lib/shared/user/resources/User/User.constants';
import { type UserFormModel, type UserModel } from '@lib/shared/user/resources/User/User.models';

@withContainer()
export class BankImplementation
  extends createRelatedResourceImplementation<BankModel, BankFormModel, UserModel, UserFormModel>({
    Resource: Bank,
    RootImplementation: UserImplementation,
    afterCreate: async ({ input, output }, context) => {
      const userId = context?.user?._id;
      const isPrimary = input?.form?.isPrimary;
      const paymentMethodId = output.result?._id;
      userId &&
        isPrimary &&
        (await Container.get(UserImplementation).update({
          filter: [{ field: '_id', value: userId }],
          update: { paymentMethodPrimary: paymentMethodId },
        }));
      return output;
    },
    beforeCreate: async ({ input }) =>
      input && getFingerprintInput({ input, type: PAYMENT_METHOD_TYPE.BANK }),
    name: BANK_RESOURCE_NAME,
    root: USER_RESOURCE_NAME,
  })
  implements BankImplementationModel {}
