import { type UseOrderResourceModel } from '@lib/frontend/commerce/hooks/useOrderResource/useOrderResource.models';
import { ORDER_RESOURCE_PARAMS } from '@lib/frontend/commerce/resources/Order/Order.constants';
import { useResource } from '@lib/frontend/resource/hooks/useResource/useResource';
import { type OrderModel } from '@lib/shared/commerce/resources/Order/Order.models';

export const useOrderResource = (): UseOrderResourceModel =>
  useResource<OrderModel>({
    ...ORDER_RESOURCE_PARAMS,
  });
