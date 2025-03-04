import { Product } from '@lib/backend/commerce/resources/Product/Product';
import { EmbeddedResource } from '@lib/backend/resource/resources/EmbeddedResource/EmbeddedResource';
import { type RefFieldModel } from '@lib/backend/resource/utils/RefField/RefField.models';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { withRootField } from '@lib/backend/resource/utils/withRootField/withRootField';
import { PRICING_RESOURCE_NAME } from '@lib/shared/commerce/resources/Pricing/Pricing.constants';
import {
  type PricingFrequencyModel,
  type PricingModel,
} from '@lib/shared/commerce/resources/Pricing/Pricing.models';
import { PRODUCT_RESOURCE_NAME } from '@lib/shared/commerce/resources/Product/Product.constants';
import { type ProductModel } from '@lib/shared/commerce/resources/Product/Product.models';
import { DATA_TYPE } from '@lib/shared/data/data.constants';

@withEntity({ isDatabase: true, isEmbeddable: true, name: PRICING_RESOURCE_NAME })
export class Pricing extends EmbeddedResource implements PricingModel {
  @withRootField({ Resource: () => Product })
  [PRODUCT_RESOURCE_NAME]?: RefFieldModel<ProductModel>;

  @withField({ isDatabase: true, isOptional: true, type: DATA_TYPE.STRING })
  currency?: string;

  @withField({ isDatabase: true, type: DATA_TYPE.STRING })
  frequency!: PricingFrequencyModel;

  @withField({ isDatabase: true, isOptional: true, type: DATA_TYPE.NUMBER })
  price?: number;
}
