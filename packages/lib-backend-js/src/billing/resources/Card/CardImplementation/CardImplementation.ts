import { Card } from '@lib/backend/billing/resources/Card/Card';
import { getFingerprintInput } from '@lib/backend/billing/utils/getFingerprintInput/getFingerprintInput';
import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { createEmbeddedResourceImplementation } from '@lib/backend/resource/utils/createEmbeddedResourceImplementation/createEmbeddedResourceImplementation';
import { UserImplementation } from '@lib/backend/user/resources/User/UserImplementation/UserImplementation';
import { CARD_RESOURCE_NAME } from '@lib/shared/billing/resources/Card/Card.constants';
import { type CardFormModel, type CardModel } from '@lib/shared/billing/resources/Card/Card.models';
import { type CardImplementationModel } from '@lib/shared/billing/resources/Card/CardImplementation/CardImplementation.models';
import { PAYMENT_METHOD_TYPE } from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.constants';
import { type UserFormModel, type UserModel } from '@lib/shared/user/resources/User/User.models';

@withContainer()
export class CardImplementation
  extends createEmbeddedResourceImplementation<CardModel, CardFormModel, UserModel, UserFormModel>({
    Resource: Card,
    RootImplementation: UserImplementation,
    beforeCreate: async ({ input }) =>
      input && getFingerprintInput({ input, type: PAYMENT_METHOD_TYPE.CARD }),
    name: CARD_RESOURCE_NAME,
  })
  implements CardImplementationModel {}
