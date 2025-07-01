import { getFingerprintInput } from '@lib/backend/billing/utils/getFingerprintInput/getFingerprintInput';
import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { createRelatedResourceImplementation } from '@lib/backend/resource/utils/createRelatedResourceImplementation/createRelatedResourceImplementation';
import { Card } from '@lib/model/billing/Card/Card';
import { CARD_RESOURCE_NAME } from '@lib/model/billing/Card/Card.constants';
import { type CardModel } from '@lib/model/billing/Card/Card.models';
import { type CardImplementationModel } from '@lib/model/billing/Card/CardImplementation/CardImplementation.models';
import { PAYMENT_METHOD_TYPE } from '@lib/model/billing/PaymentMethod/PaymentMethod.models';
import { USER_RESOURCE_NAME } from '@lib/model/user/User/User.constants';
import { type UserModel } from '@lib/model/user/User/User.models';
import { UserImplementation } from '@lib/model/user/User/UserImplementation/UserImplementation';
import { Container } from '@lib/shared/core/utils/Container/Container';

@withContainer()
export class CardImplementation
  extends createRelatedResourceImplementation<CardModel, UserModel>({
    Resource: Card,
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
      input && getFingerprintInput({ input, type: PAYMENT_METHOD_TYPE.CARD }),
    name: CARD_RESOURCE_NAME,
    root: USER_RESOURCE_NAME,
  })
  implements CardImplementationModel {}
