import { type LFCModel } from '@lib/frontend/core/core.models';
import { type InterestRateQuoteTablePropsModel } from '@lib/frontend/quant/containers/InterestRateQuoteTable/InterestRateQuoteTable.models';
import { useInterestRateQuoteResource } from '@lib/frontend/quant/hooks/useInterestRateQuoteResource/useInterestRateQuoteResource';
import { INTEREST_RATE_QUOTE_RESOURCE_PARAMS } from '@lib/frontend/quant/resources/InterestRateQuote/InterestRateQuote.constants';
import { ResourceTable } from '@lib/frontend/resource/components/ResourceTable/ResourceTable';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import {
  type InterestRateQuoteModel,
} from '@lib/model/quant/InterestRateQuote/InterestRateQuote.models';

export const InterestRateQuoteTable: LFCModel<InterestRateQuoteTablePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const implementation = useInterestRateQuoteResource();
  return (
    <ResourceTable<InterestRateQuoteModel>
      {...wrapperProps}
      {...INTEREST_RATE_QUOTE_RESOURCE_PARAMS}
      implementation={implementation}
    />
  );
};
