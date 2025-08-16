import { type LFCModel } from '@lib/frontend/core/core.models';
import { type InterestRateTablePropsModel } from '@lib/frontend/quant/containers/InterestRateTable/InterestRateTable.models';
import { useInterestRateResource } from '@lib/frontend/quant/hooks/useInterestRateResource/useInterestRateResource';
import { INTEREST_RATE_RESOURCE_PARAMS } from '@lib/frontend/quant/resources/InterestRate/InterestRate.constants';
import { ResourceTable } from '@lib/frontend/resource/components/ResourceTable/ResourceTable';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import {
  type InterestRateModel,
} from '@lib/model/quant/InterestRate/InterestRate.models';

export const InterestRateTable: LFCModel<InterestRateTablePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const implementation = useInterestRateResource();
  return (
    <ResourceTable<InterestRateModel>
      {...wrapperProps}
      {...INTEREST_RATE_RESOURCE_PARAMS}
      implementation={implementation}
    />
  );
};
