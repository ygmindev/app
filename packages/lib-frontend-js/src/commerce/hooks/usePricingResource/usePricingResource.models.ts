import { type UseResourceModel } from '@lib/frontend/resource/hooks/useResource/useResource.models';
import { type UseResourceMethodHookParamsModel } from '@lib/frontend/resource/hooks/useResourceMethod/useResourceMethod.models';
import { type PricingModel } from '@lib/model/commerce/Pricing/Pricing.models';
import { type ProductModel } from '@lib/model/commerce/Product/Product.models';

export type UsePricingResourceParamsModel = UseResourceMethodHookParamsModel<ProductModel>;

export type UsePricingResourceModel = UseResourceModel<PricingModel, ProductModel>;
