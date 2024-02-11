import { type PriceModel } from '@lib/shared/billing/utils/Price/Price.models';
import { type PRICING_FREQUENCY } from '@lib/shared/billing/utils/Pricing/Pricing.constants';

export type RecurringPricingModel = {
  frequency: PRICING_FREQUENCY.RECURRING;

  price: PriceModel;
};
