import { ProductTable } from '@lib/frontend/commerce/containers/ProductTable/ProductTable';
import { type ResourceParamsModel } from '@lib/frontend/resource/resource.models';
import { embeddedResourceRenderer } from '@lib/frontend/resource/utils/embeddedResourceRenderer/embeddedResourceRenderer';
import { PRICING_RESOURCE_NAME } from '@lib/shared/commerce/resources/Pricing/Pricing.constants';
import { PRODUCT_RESOURCE_NAME } from '@lib/shared/commerce/resources/Product/Product.constants';
import { type ProductModel } from '@lib/shared/commerce/resources/Product/Product.models';

export const PRODUCT_RESOURCE_PARAMS = {
  fields: [
    { id: '_id' },
    { id: 'name' },
    {
      // TODO: use fields for embedded query
      fields: [{ id: 'price' }, { id: 'frequency' }],
      id: PRICING_RESOURCE_NAME,
      renderer: embeddedResourceRenderer({ element: <ProductTable /> }),
    },
  ],
  name: PRODUCT_RESOURCE_NAME,
} satisfies ResourceParamsModel<ProductModel>;
