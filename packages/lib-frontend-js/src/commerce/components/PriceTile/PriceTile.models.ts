import { type TextPropsModel } from '@lib/frontend/core/components/Text/Text.models';
import { type AsyncTextModel } from '@lib/frontend/core/components/AsyncText/AsyncText.models';
import { type PricingModel } from '@lib/model/commerce/Pricing/Pricing.models';

export type PriceTilePropsModel = Pick<PricingModel, 'price' | 'currency'> &
  Pick<TextPropsModel, 'fontStyle'> & {
    label?: AsyncTextModel;
  };
