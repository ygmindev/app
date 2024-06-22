import { Product } from '@lib/backend/commerce/resources/Product/Product';
import { EmbeddedResource } from '@lib/backend/resource/resources/EmbeddedResource/EmbeddedResource';
import { type RefFieldModel } from '@lib/backend/resource/utils/RefField/RefField.models';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { withRefField } from '@lib/backend/resource/utils/withRefField/withRefField';
import { PRICING_RESOURCE_NAME } from '@lib/shared/commerce/resources/Pricing/Pricing.constants';
import {
  type PricingFrequencyModel,
  type PricingModel,
} from '@lib/shared/commerce/resources/Pricing/Pricing.models';
import { type ProductModel } from '@lib/shared/commerce/resources/Product/Product.models';
import { DATA_TYPE } from '@lib/shared/data/data.constants';

@withEntity({ isEmbeddable: true, isDatabase: true, name: PRICING_RESOURCE_NAME })
export class Pricing extends EmbeddedResource implements PricingModel {
  @withRefField({ Resource: () => Product })
  _product?: RefFieldModel<ProductModel>;

  @withField({ isOptional: true, isDatabase: true, type: DATA_TYPE.STRING })
  currency?: string;

  @withField({ isDatabase: true, type: DATA_TYPE.STRING })
  frequency!: PricingFrequencyModel;

  @withField({ isOptional: true, isDatabase: true, type: DATA_TYPE.NUMBER })
  price?: number;
}
