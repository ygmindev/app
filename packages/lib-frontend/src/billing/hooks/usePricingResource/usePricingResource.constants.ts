import { type GraphQlQueryParamsFieldsModel } from '@lib/frontend/data/utils/graphQlQuery/graphQlQuery.models';
import { type UseResourceMethodParamsFieldsModel } from '@lib/frontend/resource/hooks/useResourceMethod/useResourceMethod.models';
import { type PricingModel } from '@lib/shared/billing/resources/Pricing/Pricing.models';
import { type ProductModel } from '@lib/shared/billing/resources/Product/Product.models';
import { type ResourceMethodTypeCrudModel } from '@lib/shared/resource/resource.models';

export const PRICING_FIELDS = [
  'name',
] satisfies GraphQlQueryParamsFieldsModel<PricingModel>;

export const PRICING_OUTPUT_FIELDS = [
  { result: PRICING_FIELDS },
] satisfies UseResourceMethodParamsFieldsModel<
  ResourceMethodTypeCrudModel,
  PricingModel,
  ProductModel
>;
