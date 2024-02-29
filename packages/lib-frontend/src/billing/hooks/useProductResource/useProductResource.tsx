import { PRODUCT_FIELDS } from '@lib/frontend/billing/hooks/useProductResource/useProductResource.constants';
import { type UseProductResourceModel } from '@lib/frontend/billing/hooks/useProductResource/useProductResource.models';
import { useResource } from '@lib/frontend/resource/hooks/useResource/useResource';
import { PRODUCT_RESOURCE_NAME } from '@lib/shared/billing/resources/Product/Product.constants';
import {
  type ProductFormModel,
  type ProductModel,
} from '@lib/shared/billing/resources/Product/Product.models';

export const useProductResource = (): UseProductResourceModel =>
  useResource<ProductModel, ProductFormModel>({
    fields: [{ result: PRODUCT_FIELDS }],
    name: PRODUCT_RESOURCE_NAME,
  });
