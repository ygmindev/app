import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { createEntityResourceImplementation } from '@lib/backend/resource/utils/createEntityResourceImplementation/createEntityResourceImplementation';
import { ORDER_RESOURCE_NAME } from '@lib/shared/commerce/resources/Order/Order.constants';
import {
  type OrderFormModel,
  type OrderModel,
} from '@lib/shared/commerce/resources/Order/Order.models';
import { type OrderImplementationModel } from '@lib/shared/commerce/resources/Order/OrderImplementation/OrderImplementation.models';
import { Order } from '@lib/backend/commerce/resources/Order/Order';

@withContainer({ name: `${ORDER_RESOURCE_NAME}Implementation` })
export class OrderImplementation
  extends createEntityResourceImplementation<OrderModel, OrderFormModel>({
    Resource: Order,
    name: ORDER_RESOURCE_NAME,
  })
  implements OrderImplementationModel {}
