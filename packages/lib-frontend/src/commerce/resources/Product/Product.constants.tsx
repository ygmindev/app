import { PricingTable } from '@lib/frontend/commerce/containers/PricingTable/PricingTable';
import { type ResourceParamsModel } from '@lib/frontend/resource/resource.models';
import { embeddedResourceRenderer } from '@lib/frontend/resource/utils/embeddedResourceRenderer/embeddedResourceRenderer';
import { PRICING_RESOURCE_NAME } from '@lib/shared/commerce/resources/Pricing/Pricing.constants';
import { PRODUCT_RESOURCE_NAME } from '@lib/shared/commerce/resources/Product/Product.constants';
import { type ProductModel } from '@lib/shared/commerce/resources/Product/Product.models';

export const PRODUCT_RESOURCE_PARAMS = {
  fields: [
    { id: '_id' },
    { id: 'name' },
    { id: 'description' },
    // TODO: use fields for embedded query
    {
      fields: [{ id: 'price' }, { id: 'frequency' }, { id: '_id' }],
      id: PRICING_RESOURCE_NAME,
      renderer: embeddedResourceRenderer({ element: <PricingTable /> }),
    },
  ],
  name: PRODUCT_RESOURCE_NAME,
} satisfies ResourceParamsModel<ProductModel>;
