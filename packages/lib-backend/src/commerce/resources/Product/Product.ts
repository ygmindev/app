import { Pricing } from '@lib/backend/commerce/resources/Pricing/Pricing';
import { EntityResource } from '@lib/backend/resource/resources/EntityResource/EntityResource';
import { withEmbeddedResourceField } from '@lib/backend/resource/utils/withEmbeddedResourceField/withEmbeddedResourceField';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { PRICING_RESOURCE_NAME } from '@lib/shared/commerce/resources/Pricing/Pricing.constants';
import { type PricingModel } from '@lib/shared/commerce/resources/Pricing/Pricing.models';
import { PRODUCT_RESOURCE_NAME } from '@lib/shared/commerce/resources/Product/Product.constants';
import {
  type ProductFormModel,
  type ProductModel,
} from '@lib/shared/commerce/resources/Product/Product.models';
import { DATA_TYPE } from '@lib/shared/data/data.constants';

@withEntity({ isRepository: true, name: PRODUCT_RESOURCE_NAME })
export class Product extends EntityResource implements ProductModel {
  @withEmbeddedResourceField({
    Resource: () => Pricing,
    isRepository: true,
    root: PRODUCT_RESOURCE_NAME,
  })
  [PRICING_RESOURCE_NAME]?: Array<PricingModel>;

  @withField({ isOptional: true, isRepository: true, type: DATA_TYPE.STRING })
  description?: string;

  @withField({ isArray: true, isOptional: true, type: DATA_TYPE.STRING })
  imageSrc?: Array<string>;

  @withField({ isRepository: true, type: DATA_TYPE.STRING })
  name!: string;
}

@withEntity({ name: `${PRODUCT_RESOURCE_NAME}Form` })
export class ProductForm implements ProductFormModel {}
