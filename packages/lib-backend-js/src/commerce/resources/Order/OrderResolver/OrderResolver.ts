import { Order } from '@lib/backend/commerce/resources/Order/Order';
import { OrderImplementation } from '@lib/backend/commerce/resources/Order/OrderImplementation/OrderImplementation';
import { type OrderResolverModel } from '@lib/backend/commerce/resources/Order/OrderResolver/OrderResolver.models';
import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { withResolver } from '@lib/backend/http/utils/withResolver/withResolver';
import { createEntityResourceResolver } from '@lib/backend/resource/utils/createEntityResourceResolver/createEntityResourceResolver';
import { ORDER_RESOURCE_NAME } from '@lib/shared/commerce/resources/Order/Order.constants';
import {
  type OrderFormModel,
  type OrderModel,
} from '@lib/shared/commerce/resources/Order/Order.models';

@withContainer()
@withResolver({ Resource: () => Order })
export class OrderResolver
  extends createEntityResourceResolver<OrderModel, OrderFormModel>({
    Resource: () => Order,
    ResourceImplementation: OrderImplementation,
    name: ORDER_RESOURCE_NAME,
  })
  implements OrderResolverModel {}
