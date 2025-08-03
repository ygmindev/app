import { type LFCModel } from '@lib/frontend/core/core.models';
import { type TreasuryRateTablePropsModel } from '@lib/frontend/quant/containers/TreasuryRateTable/TreasuryRateTable.models';
import { useTreasuryRateResource } from '@lib/frontend/quant/hooks/useTreasuryRateResource/useTreasuryRateResource';
import { TREASURY_RATE_RESOURCE_PARAMS } from '@lib/frontend/quant/resources/TreasuryRate/TreasuryRate.constants';
import { ResourceTable } from '@lib/frontend/resource/components/ResourceTable/ResourceTable';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { type TreasuryRateModel } from '@lib/model/quant/TreasuryRate/TreasuryRate.models';

export const TreasuryRateTable: LFCModel<TreasuryRateTablePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const implementation = useTreasuryRateResource();
  return (
    <ResourceTable<TreasuryRateModel>
      {...wrapperProps}
      {...TREASURY_RATE_RESOURCE_PARAMS}
      implementation={implementation}
    />
  );
};
