import { type UseProductResourceModel } from '@lib/frontend/commerce/hooks/useProductResource/useProductResource.models';
import { PRODUCT_RESOURCE_PARAMS } from '@lib/frontend/commerce/resources/Product/Product.constants';
import { useResource } from '@lib/frontend/resource/hooks/useResource/useResource';
import { type ProductModel } from '@lib/model/commerce/Product/Product.models';

export const useProductResource = (): UseProductResourceModel =>
  useResource<ProductModel>({
    ...PRODUCT_RESOURCE_PARAMS,
  });
