import { RefModel } from '@lib/backend/resource/utils/RefModel/RefModel.models';
import { withEmbeddedField } from '@lib/backend/resource/utils/withEmbeddedField/withEmbeddedField';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { Pricing } from '@lib/model/commerce/Pricing/Pricing';
import { PRICING_RESOURCE_NAME } from '@lib/model/commerce/Pricing/Pricing.constants';
import { type PricingModel } from '@lib/model/commerce/Pricing/Pricing.models';
import { PRODUCT_RESOURCE_NAME } from '@lib/model/commerce/Product/Product.constants';
import { type ProductModel } from '@lib/model/commerce/Product/Product.models';
import { EntityResource } from '@lib/model/resource/EntityResource/EntityResource';
import { DATA_TYPE } from '@lib/shared/data/data.constants';

@withEntity({ isDatabase: true, name: PRODUCT_RESOURCE_NAME })
export class Product extends EntityResource implements ProductModel {
  @withEmbeddedField({ Resource: () => Pricing })
  [PRICING_RESOURCE_NAME]?: Array<RefModel<PricingModel>>;

  @withField({ isDatabase: true, isOptional: true, type: DATA_TYPE.STRING })
  description?: string;

  @withField({ isArray: true, isOptional: true, type: DATA_TYPE.STRING })
  imageSrc?: Array<string>;

  @withField({ isDatabase: true, type: DATA_TYPE.STRING })
  name!: string;
}
