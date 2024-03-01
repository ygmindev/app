import { PRICING_FIELDS } from '@lib/frontend/billing/hooks/usePricingResource/usePricingResource.constants';
import { type UsePricingResourceModel } from '@lib/frontend/billing/hooks/usePricingResource/usePricingResource.models';
import { useResource } from '@lib/frontend/resource/hooks/useResource/useResource';
import { PRICING_RESOURCE_NAME } from '@lib/shared/billing/resources/Pricing/Pricing.constants';
import {
  type PricingFormModel,
  type PricingModel,
} from '@lib/shared/billing/resources/Pricing/Pricing.models';
import { type ProductModel } from '@lib/shared/billing/resources/Product/Product.models';
import { PRODUCT_RESOURCE_NAME } from '@lib/shared/billing/resources/Product/Product.constants';

export const usePricingResource = (): UsePricingResourceModel =>
  useResource<PricingModel, PricingFormModel, ProductModel>({
    fields: [{ result: PRICING_FIELDS }],
    name: PRICING_RESOURCE_NAME,
    root: PRODUCT_RESOURCE_NAME,
  });
