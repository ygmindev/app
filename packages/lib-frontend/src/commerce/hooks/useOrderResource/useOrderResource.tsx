import { ORDER_FIELDS } from '@lib/frontend/commerce/hooks/useOrderResource/useOrderResource.constants';
import { type UseOrderResourceModel } from '@lib/frontend/commerce/hooks/useOrderResource/useOrderResource.models';
import { useResource } from '@lib/frontend/resource/hooks/useResource/useResource';
import { ORDER_RESOURCE_NAME } from '@lib/shared/commerce/resources/Order/Order.constants';
import {
  type OrderFormModel,
  type OrderModel,
} from '@lib/shared/commerce/resources/Order/Order.models';

export const useOrderResource = (): UseOrderResourceModel =>
  useResource<OrderModel, OrderFormModel>({
    fields: [{ result: ORDER_FIELDS }],
    name: ORDER_RESOURCE_NAME,
  });
