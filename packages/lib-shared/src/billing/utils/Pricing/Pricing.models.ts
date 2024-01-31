import { type OneoffPricingModel } from '@lib/shared/billing/utils/OneoffPricing/OneoffPricing.models';
import {
  type PRICING_FREQUENCY,
  type PRICING_TYPE,
} from '@lib/shared/billing/utils/Pricing/Pricing.constants';
import { type RecurringPricingModel } from '@lib/shared/billing/utils/RecurringPricing/RecurringPricing.models';

export type PricingModel = OneoffPricingModel | RecurringPricingModel;

export type PricingTypeModel = `${PRICING_TYPE}`;

export type PricingFrequencyModel = `${PRICING_FREQUENCY}`;
