import { type PricingTablePropsModel } from '@lib/frontend/commerce/containers/PricingTable/PricingTable.models';
import { usePricingResource } from '@lib/frontend/commerce/hooks/usePricingResource/usePricingResource';
import { PRICING_RESOURCE_PARAMS } from '@lib/frontend/commerce/resources/Pricing/Pricing.constants';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { ResourceTable } from '@lib/frontend/resource/components/ResourceTable/ResourceTable';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import {
  type PricingFormModel,
  type PricingModel,
} from '@lib/shared/commerce/resources/Pricing/Pricing.models';
import { type ProductModel } from '@lib/shared/commerce/resources/Product/Product.models';

export const PricingTable: LFCModel<PricingTablePropsModel> = ({ root, ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const implementation = usePricingResource({ root });
  return (
    <ResourceTable<PricingModel, PricingFormModel, ProductModel>
      {...wrapperProps}
      {...PRICING_RESOURCE_PARAMS}
      implementation={implementation}
    />
  );
};
