import { Order } from '@lib/model/commerce/Order/Order.entity';
import { OrderImplementation } from '@lib/model/commerce/Order/OrderImplementation/OrderImplementation';
import { type OrderResolverModel } from '@lib/model/commerce/Order/OrderResolver/OrderResolver.models';
import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { withResolver } from '@lib/backend/http/utils/withResolver/withResolver';
import { createEntityResourceResolver } from '@lib/backend/resource/utils/createEntityResourceResolver/createEntityResourceResolver';
import { ORDER_RESOURCE_NAME } from '@lib/model/commerce/Order/Order.constants';
import { type OrderModel } from '@lib/model/commerce/Order/Order.models';

@withContainer()
@withResolver({ Resource: () => Order })
export class OrderResolver
  extends createEntityResourceResolver<OrderModel>({
    Resource: () => Order,
    ResourceImplementation: OrderImplementation,
    name: ORDER_RESOURCE_NAME,
  })
  implements OrderResolverModel {}
