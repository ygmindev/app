import { type GraphQlQueryParamsFieldsModel } from '@lib/frontend/data/utils/graphQlQuery/graphQlQuery.models';
import { type ProductModel } from '@lib/shared/billing/resources/Product/Product.models';

export const PRODUCT_FIELDS = [
  '_id',
] satisfies GraphQlQueryParamsFieldsModel<ProductModel>;
