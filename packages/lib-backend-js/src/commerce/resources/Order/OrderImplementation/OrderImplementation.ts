import { PaymentMethodImplementation } from '@lib/backend/billing/resources/PaymentMethod/PaymentMethodImplementation/PaymentMethodImplementation';
import { Order } from '@lib/backend/commerce/resources/Order/Order';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { createEntityResourceImplementation } from '@lib/backend/resource/utils/createEntityResourceImplementation/createEntityResourceImplementation';
import { ORDER_RESOURCE_NAME } from '@lib/shared/commerce/resources/Order/Order.constants';
import {
  type OrderFormModel,
  type OrderModel,
} from '@lib/shared/commerce/resources/Order/Order.models';
import { type OrderImplementationModel } from '@lib/shared/commerce/resources/Order/OrderImplementation/OrderImplementation.models';

@withContainer({ name: `${ORDER_RESOURCE_NAME}Implementation` })
export class OrderImplementation
  extends createEntityResourceImplementation<OrderModel, OrderFormModel>({
    Resource: Order,
    beforeCreate: async ({ input }, context) => {
      input?.form?.paymentMethodId &&
        input?.form?.items &&
        (await Container.get(PaymentMethodImplementation).createToken({
          form: { paymentMethodId: input.form.paymentMethodId, products: input.form.items },
          root: context?.user?._id,
        }));
      return input;
    },
    name: ORDER_RESOURCE_NAME,
  })
  implements OrderImplementationModel {}
