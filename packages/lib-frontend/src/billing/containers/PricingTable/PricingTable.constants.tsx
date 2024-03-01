import { NUMBER_UNIT_TYPE } from '@lib/frontend/data/data.constants';
import { type ResourceTablePropsModel } from '@lib/frontend/resource/components/ResourceTable/ResourceTable.models';
import { DATA_TYPE } from '@lib/shared/data/data.constants';
import { PRICING_RESOURCE_NAME } from '@lib/shared/billing/resources/Pricing/Pricing.constants';
import {
  type PricingFormModel,
  type PricingModel,
} from '@lib/shared/billing/resources/Pricing/Pricing.models';

export const PRICING_TABLE_PROPS = {
  columns: [
    { id: 'name', type: DATA_TYPE.STRING },
  ],
  name: PRICING_RESOURCE_NAME,
} satisfies Omit<ResourceTablePropsModel<PricingModel, PricingFormModel>, 'implementation'>;
