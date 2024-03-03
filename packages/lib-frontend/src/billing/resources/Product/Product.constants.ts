import { type ResourceParamsModel } from '@lib/frontend/resource/resource.models';
import { PRICING_RESOURCE_NAME } from '@lib/shared/billing/resources/Pricing/Pricing.constants';
import { PRODUCT_RESOURCE_NAME } from '@lib/shared/billing/resources/Product/Product.constants';
import { type ProductModel } from '@lib/shared/billing/resources/Product/Product.models';

export const PRODUCT_RESOURCE_PARAMS = {
  fields: [
    { id: '_id' },
    { id: 'name' },
    { fields: [{ id: 'price' }, { id: 'frequency' }], id: PRICING_RESOURCE_NAME },
  ],
  name: PRODUCT_RESOURCE_NAME,
} satisfies ResourceParamsModel<ProductModel>;
