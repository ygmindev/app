import { EntityResource } from '@lib/model/resource/EntityResource/EntityResource';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { PRICING_RESOURCE_NAME } from '@lib/model/commerce/Pricing/Pricing.constants';
import {
  type PricingFrequencyModel,
  type PricingModel,
} from '@lib/model/commerce/Pricing/Pricing.models';
import { DATA_TYPE } from '@lib/shared/data/data.constants';

@withEntity({ isDatabase: true, isEmbeddable: true, name: PRICING_RESOURCE_NAME })
export class Pricing extends EntityResource implements PricingModel {
  @withField({ isDatabase: true, isOptional: true, type: DATA_TYPE.STRING })
  currency?: string;

  @withField({ isDatabase: true, type: DATA_TYPE.STRING })
  frequency!: PricingFrequencyModel;

  @withField({ isDatabase: true, isOptional: true, type: DATA_TYPE.NUMBER })
  price?: number;
}
