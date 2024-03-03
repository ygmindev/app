import { type UseProductResourceModel } from '@lib/frontend/billing/hooks/useProductResource/useProductResource.models';
import { PRODUCT_RESOURCE_PARAMS } from '@lib/frontend/billing/resources/Product/Product.constants';
import { useResource } from '@lib/frontend/resource/hooks/useResource/useResource';
import {
  type ProductFormModel,
  type ProductModel,
} from '@lib/shared/billing/resources/Product/Product.models';

export const useProductResource = (): UseProductResourceModel =>
  useResource<ProductModel, ProductFormModel>({
    ...PRODUCT_RESOURCE_PARAMS,
  });
