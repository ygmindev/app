import { PricingTable } from '@lib/frontend/commerce/containers/PricingTable/PricingTable';
import { type ResourceParamsModel } from '@lib/frontend/resource/resource.models';
import { embeddedResourceRenderer } from '@lib/frontend/resource/utils/embeddedResourceRenderer/embeddedResourceRenderer';
import { PRICING_RESOURCE_NAME } from '@lib/model/commerce/Pricing/Pricing.constants';
import { PRODUCT_RESOURCE_NAME } from '@lib/shared/commerce/resources/Product/Product.constants';
import { type ProductModel } from '@lib/shared/commerce/resources/Product/Product.models';

export const PRODUCT_RESOURCE_PARAMS = {
  fields: [
    { id: 'name' },
    { id: 'description' },
    {
      fields: [{ id: '_id' }, { id: 'price' }, { id: 'frequency' }],
      id: PRICING_RESOURCE_NAME,
      renderer: embeddedResourceRenderer({ element: <PricingTable /> }),
    },
  ],
  name: PRODUCT_RESOURCE_NAME,
} satisfies ResourceParamsModel<ProductModel>;
