import { Bank } from '@lib/model/billing/Bank/Bank';
import { getFingerprintInput } from '@lib/backend/billing/utils/getFingerprintInput/getFingerprintInput';
import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { createRelatedResourceImplementation } from '@lib/backend/resource/utils/createRelatedResourceImplementation/createRelatedResourceImplementation';
import { UserImplementation } from '@lib/model/user/User/UserImplementation/UserImplementation';
import { BANK_RESOURCE_NAME } from '@lib/model/billing/Bank/Bank.constants';
import { type BankModel } from '@lib/model/billing/Bank/Bank.models';
import { type BankImplementationModel } from '@lib/model/billing/Bank/BankImplementation/BankImplementation.models.js';
import { PAYMENT_METHOD_TYPE } from '@lib/model/billing/PaymentMethod/PaymentMethod.constants';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { USER_RESOURCE_NAME } from '@lib/model/user/User/User.constants';
import { type UserModel } from '@lib/model/user/User/User.models';

@withContainer()
export class BankImplementation
  extends createRelatedResourceImplementation<BankModel, UserModel>({
    Resource: Bank,
    RootImplementation: UserImplementation,
    afterCreate: async ({ input, output }, context) => {
      const userId = context?.user?._id;
      const isPrimary = input?.form?.isPrimary;
      const paymentMethodId = output.result?._id;
      userId &&
        isPrimary &&
        paymentMethodId &&
        (await Container.get(UserImplementation).update({
          id: [userId],
          update: { paymentMethodPrimary: { _id: paymentMethodId } },
        }));
      return output;
    },
    beforeCreate: async ({ input }) =>
      input && getFingerprintInput({ input, type: PAYMENT_METHOD_TYPE.BANK }),
    name: BANK_RESOURCE_NAME,
    root: USER_RESOURCE_NAME,
  })
  implements BankImplementationModel {}
