import { type PriceModel } from '@lib/shared/billing/resources/Price/Price.models';
import {
  type PRICING_FREQUENCY,
  type PRICING_TYPE,
} from '@lib/shared/billing/utils/Pricing/Pricing.constants';

export type OneoffPricingModel = {
  frequency: PRICING_FREQUENCY.ONE_OFF;
} & (OneoffFlatPricingModel | OneoffPackagePricingModel);

export type OneoffFlatPricingModel = {
  price: PriceModel;

  type: PRICING_TYPE.FLAT;
};

export type OneoffPackagePricingModel = {
  price: PriceModel;

  type: PRICING_TYPE.PACKAGE;

  unit: number;
};
