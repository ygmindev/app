import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { createEntityResourceImplementation } from '@lib/backend/resource/utils/createEntityResourceImplementation/createEntityResourceImplementation';
import { User } from '@lib/backend/user/resources/User/User';
import { PaymentMethodModel } from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.models';
import { USER_RESOURCE_NAME } from '@lib/shared/user/resources/User/User.constants';
import { type UserModel } from '@lib/shared/user/resources/User/User.models';
import { type UserImplementationModel } from '@lib/shared/user/resources/User/UserImplementation/UserImplementation.models';
import { ObjectId } from 'mongodb';

@withContainer({ name: `${USER_RESOURCE_NAME}Implementation` })
export class UserImplementation
  extends createEntityResourceImplementation<UserModel>({
    Resource: User,
    afterGet: async ({ output }) => {
      if (output.result) {
        const { paymentMethodPrimary } = output.result;
        if (paymentMethodPrimary && paymentMethodPrimary instanceof ObjectId) {
          output.result.paymentMethodPrimary = {
            _id: paymentMethodPrimary,
          } as unknown as PaymentMethodModel;
        }
      }
      return output;
    },
    name: USER_RESOURCE_NAME,
  })
  implements UserImplementationModel {}
