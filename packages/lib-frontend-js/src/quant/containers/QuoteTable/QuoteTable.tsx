import { type LFCModel } from '@lib/frontend/core/core.models';
import { type QuoteTablePropsModel } from '@lib/frontend/quant/containers/QuoteTable/QuoteTable.models';
import { useQuoteResource } from '@lib/frontend/quant/hooks/useQuoteResource/useQuoteResource';
import { QUOTE_RESOURCE_PARAMS } from '@lib/frontend/quant/resources/Quote/Quote.constants';
import { ResourceTable } from '@lib/frontend/resource/components/ResourceTable/ResourceTable';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { type QuoteModel } from '@lib/model/quant/Quote/Quote.models';
import { type SecurityModel } from '@lib/model/quant/Security/Security.models';

export const QuoteTable: LFCModel<QuoteTablePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const implementation = useQuoteResource();
  return (
    <ResourceTable<QuoteModel, SecurityModel>
      {...wrapperProps}
      {...QUOTE_RESOURCE_PARAMS}
      implementation={implementation}
    />
  );
};
