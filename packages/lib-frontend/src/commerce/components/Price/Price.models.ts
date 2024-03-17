import { type PricingModel } from '@lib/shared/commerce/resources/Pricing/Pricing.models';

export type PricePropsModel = Pick<PricingModel, 'price' | 'currency'>;
