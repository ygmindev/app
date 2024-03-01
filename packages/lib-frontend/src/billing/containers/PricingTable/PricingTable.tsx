import { type LFCModel } from '@lib/frontend/core/core.models';
import { PRICING_TABLE_PROPS } from '@lib/frontend/billing/containers/PricingTable/PricingTable.constants';
import { type PricingTablePropsModel } from '@lib/frontend/billing/containers/PricingTable/PricingTable.models';
import { usePricingResource } from '@lib/frontend/billing/hooks/usePricingResource/usePricingResource';
import { ResourceTable } from '@lib/frontend/resource/components/ResourceTable/ResourceTable';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import {
  type PricingFormModel,
  type PricingModel,
} from '@lib/shared/billing/resources/Pricing/Pricing.models';
import { type ProductModel } from '@lib/shared/billing/resources/Product/Product.models';

export const PricingTable: LFCModel<PricingTablePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const implementation = usePricingResource();
  return (
    <ResourceTable<PricingModel, PricingFormModel, ProductModel>
      {...wrapperProps}
      {...PRICING_TABLE_PROPS}
      implementation={implementation}
    />
  );
};
