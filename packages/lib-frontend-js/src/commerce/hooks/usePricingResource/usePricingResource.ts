import {
  type UsePricingResourceModel,
  type UsePricingResourceParamsModel,
} from '@lib/frontend/commerce/hooks/usePricingResource/usePricingResource.models';
import { PRICING_RESOURCE_PARAMS } from '@lib/frontend/commerce/resources/Pricing/Pricing.constants';
import { useResource } from '@lib/frontend/resource/hooks/useResource/useResource';
import { type PricingModel } from '@lib/shared/commerce/resources/Pricing/Pricing.models';
import { type ProductModel } from '@lib/shared/commerce/resources/Product/Product.models';

export const usePricingResource = ({
  root,
}: UsePricingResourceParamsModel): UsePricingResourceModel =>
  useResource<PricingModel, ProductModel>({
    ...PRICING_RESOURCE_PARAMS,
    root,
  });
