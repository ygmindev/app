import { NUMBER_UNIT_TYPE } from '@lib/frontend/data/data.constants';
import { type ResourceTablePropsModel } from '@lib/frontend/resource/components/ResourceTable/ResourceTable.models';
import { DATA_TYPE } from '@lib/shared/data/data.constants';
import { PRODUCT_RESOURCE_NAME } from '@lib/shared/billing/resources/Product/Product.constants';
import {
  type ProductFormModel,
  type ProductModel,
} from '@lib/shared/billing/resources/Product/Product.models';

export const PRODUCT_TABLE_PROPS = {
  columns: [
    { id: 'name', type: DATA_TYPE.STRING },
  ],
  name: PRODUCT_RESOURCE_NAME,
} satisfies Omit<ResourceTablePropsModel<ProductModel, ProductFormModel>, 'implementation'>;
