import { PaymentMethodImplementation } from '@lib/backend/billing/resources/PaymentMethod/PaymentMethodImplementation/PaymentMethodImplementation';
import { Order } from '@lib/backend/commerce/resources/Order/Order';
import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { createEntityResourceImplementation } from '@lib/backend/resource/utils/createEntityResourceImplementation/createEntityResourceImplementation';
import { ORDER_RESOURCE_NAME } from '@lib/shared/commerce/resources/Order/Order.constants';
import { type OrderModel } from '@lib/shared/commerce/resources/Order/Order.models';
import { type OrderImplementationModel } from '@lib/shared/commerce/resources/Order/OrderImplementation/OrderImplementation.models';
import { Container } from '@lib/shared/core/utils/Container/Container';

@withContainer({ name: `${ORDER_RESOURCE_NAME}Implementation` })
export class OrderImplementation
  extends createEntityResourceImplementation<OrderModel>({
    Resource: Order,
    beforeCreate: async ({ input }, context) => {
      input?.form?.paymentMethodId &&
        input?.form?.items &&
        (await Container.get(PaymentMethodImplementation).createToken(
          {
            paymentMethodId: input.form.paymentMethodId,
            products: input.form.items,
          },
          context,
        ));
      return input;
    },
    name: ORDER_RESOURCE_NAME,
  })
  implements OrderImplementationModel {}
