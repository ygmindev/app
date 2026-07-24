import { type UseResourceModel } from '@lib/frontend/resource/hooks/useResource/useResource.models';
import { type UseResourceQueryHookParamsModel } from '@lib/frontend/resource/hooks/useResourceQuery/useResourceQuery.models';
import { type PricingModel } from '@lib/model/commerce/Pricing/Pricing.models';
import { type ProductModel } from '@lib/model/commerce/Product/Product.models';

export type UsePricingResourceParamsModel = UseResourceQueryHookParamsModel<ProductModel>;

export type UsePricingResourceModel = UseResourceModel<PricingModel, ProductModel>;
