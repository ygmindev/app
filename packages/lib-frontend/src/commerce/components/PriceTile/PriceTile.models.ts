import { type PricingModel } from '@lib/shared/commerce/resources/Pricing/Pricing.models';

export type PriceTilePropsModel = Pick<PricingModel, 'price' | 'currency'>;
