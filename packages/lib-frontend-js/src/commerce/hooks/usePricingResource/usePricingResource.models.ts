import { type UseResourceMethodHookParamsModel } from '@lib/frontend/resource/hooks/useResourceMethod/useResourceMethod.models';
import { type PricingImplementationModel } from '@lib/shared/commerce/resources/Pricing/PricingImplementation/PricingImplementation.models';
import { type ProductModel } from '@lib/shared/commerce/resources/Product/Product.models';

export type UsePricingResourceParamsModel = UseResourceMethodHookParamsModel<ProductModel>;

export type UsePricingResourceModel = PricingImplementationModel;
