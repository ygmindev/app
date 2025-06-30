import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { createEntityResourceImplementation } from '@lib/backend/resource/utils/createEntityResourceImplementation/createEntityResourceImplementation';
import { PaymentMethodModel } from '@lib/model/billing/PaymentMethod/PaymentMethod.models';
import { User } from '@lib/model/user/User/User';
import { USER_RESOURCE_NAME } from '@lib/model/user/User/User.constants';
import { type UserModel } from '@lib/model/user/User/User.models';
import { type UserImplementationModel } from '@lib/model/user/User/UserImplementation/UserImplementation.models';
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
