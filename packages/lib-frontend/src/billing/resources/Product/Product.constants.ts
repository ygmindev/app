import { type ResourceParamsModel } from '@lib/frontend/resource/resource.models';
import { UTILITY_RESOURCE_NAME } from '@lib/shared/billing/resources/Utility/Utility.constants';
import { PRODUCT_RESOURCE_NAME } from '@lib/shared/billing/resources/Product/Product.constants';
import { type ProductModel } from '@lib/shared/billing/resources/Product/Product.models';

export const PRODUCT_RESOURCE_PARAMS = {
  fields: [{ id: '_id' }],
  name: PRODUCT_RESOURCE_NAME,
} satisfies ResourceParamsModel<ProductModel>;
