import { type UsePricingResourceModel } from '@lib/frontend/billing/hooks/usePricingResource/usePricingResource.models';
import { PRICING_RESOURCE_PARAMS } from '@lib/frontend/billing/resources/Pricing/Pricing.constants';
import { useResource } from '@lib/frontend/resource/hooks/useResource/useResource';
import {
  type PricingFormModel,
  type PricingModel,
} from '@lib/shared/billing/resources/Pricing/Pricing.models';
import { type ProductModel } from '@lib/shared/billing/resources/Product/Product.models';

export const usePricingResource = (): UsePricingResourceModel =>
  useResource<PricingModel, PricingFormModel, ProductModel>({
    ...PRICING_RESOURCE_PARAMS,
  });
