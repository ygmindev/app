import { type LFCModel } from '@lib/frontend/core/core.models';
import { type InterestRateFutureQuoteTablePropsModel } from '@lib/frontend/quant/containers/InterestRateFutureQuoteTable/InterestRateFutureQuoteTable.models';
import { useInterestRateFutureQuoteResource } from '@lib/frontend/quant/hooks/useInterestRateFutureQuoteResource/useInterestRateFutureQuoteResource';
import { INTEREST_RATE_FUTURE_QUOTE_RESOURCE_PARAMS } from '@lib/frontend/quant/resources/InterestRateFutureQuote/InterestRateFutureQuote.constants';
import { ResourceTable } from '@lib/frontend/resource/components/ResourceTable/ResourceTable';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import {
  type InterestRateFutureQuoteModel,
} from '@lib/model/quant/InterestRateFutureQuote/InterestRateFutureQuote.models';

export const InterestRateFutureQuoteTable: LFCModel<InterestRateFutureQuoteTablePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const implementation = useInterestRateFutureQuoteResource();
  return (
    <ResourceTable<InterestRateFutureQuoteModel>
      {...wrapperProps}
      {...INTEREST_RATE_FUTURE_QUOTE_RESOURCE_PARAMS}
      implementation={implementation}
    />
  );
};
