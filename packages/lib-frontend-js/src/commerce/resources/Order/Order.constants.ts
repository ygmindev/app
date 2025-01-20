import { type ResourceParamsModel } from '@lib/frontend/resource/resource.models';
import { ORDER_RESOURCE_NAME } from '@lib/shared/commerce/resources/Order/Order.constants';
import { type OrderModel } from '@lib/shared/commerce/resources/Order/Order.models';

export const ORDER_RESOURCE_PARAMS = {
  fields: [
    {
      fields: [{ id: 'name' }, { id: 'price' }],
      id: 'items',
    },
  ],
  name: ORDER_RESOURCE_NAME,
} satisfies ResourceParamsModel<OrderModel>;
