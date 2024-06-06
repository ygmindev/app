import { Product } from '@lib/backend/commerce/resources/Product/Product';
import { EmbeddedResource } from '@lib/backend/resource/resources/EmbeddedResource/EmbeddedResource';
import { withEmbeddableRootField } from '@lib/backend/resource/utils/withEmbeddableRootField/withEmbeddableRootField';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { PRICING_RESOURCE_NAME } from '@lib/shared/commerce/resources/Pricing/Pricing.constants';
import {
  type PricingFrequencyModel,
  type PricingModel,
} from '@lib/shared/commerce/resources/Pricing/Pricing.models';
import { PRODUCT_RESOURCE_NAME } from '@lib/shared/commerce/resources/Product/Product.constants';
import { type ProductModel } from '@lib/shared/commerce/resources/Product/Product.models';
import { DATA_TYPE } from '@lib/shared/data/data.constants';

@withEntity({ isEmbeddable: true, isRepository: true, name: PRICING_RESOURCE_NAME })
export class Pricing extends EmbeddedResource implements PricingModel {
  @withEmbeddableRootField({ Resource: () => Product })
  [PRODUCT_RESOURCE_NAME]?: ProductModel;

  @withField({ isOptional: true, isRepository: true, type: DATA_TYPE.STRING })
  currency?: string;

  @withField({ isRepository: true, type: DATA_TYPE.STRING })
  frequency!: PricingFrequencyModel;

  @withField({ isOptional: true, isRepository: true, type: DATA_TYPE.NUMBER })
  price?: number;
}
