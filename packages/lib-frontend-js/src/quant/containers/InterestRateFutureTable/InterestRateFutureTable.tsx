import { type LFCModel } from '@lib/frontend/core/core.models';
import { type InterestRateFutureTablePropsModel } from '@lib/frontend/quant/containers/InterestRateFutureTable/InterestRateFutureTable.models';
import { useInterestRateFutureResource } from '@lib/frontend/quant/hooks/useInterestRateFutureResource/useInterestRateFutureResource';
import { INTEREST_RATE_FUTURE_RESOURCE_PARAMS } from '@lib/frontend/quant/resources/InterestRateFuture/InterestRateFuture.constants';
import { ResourceTable } from '@lib/frontend/resource/components/ResourceTable/ResourceTable';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import {
  type InterestRateFutureModel,
} from '@lib/model/quant/InterestRateFuture/InterestRateFuture.models';

export const InterestRateFutureTable: LFCModel<InterestRateFutureTablePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const implementation = useInterestRateFutureResource();
  return (
    <ResourceTable<InterestRateFutureModel>
      {...wrapperProps}
      {...INTEREST_RATE_FUTURE_RESOURCE_PARAMS}
      implementation={implementation}
    />
  );
};
