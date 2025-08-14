import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { withResolver } from '@lib/backend/http/utils/withResolver/withResolver';
import { createRelatedResourceResolver } from '@lib/backend/resource/utils/createRelatedResourceResolver/createRelatedResourceResolver';
import { Quote } from '@lib/model/quant/Quote/Quote';
import { QUOTE_RESOURCE_NAME } from '@lib/model/quant/Quote/Quote.constants';
import { type QuoteModel } from '@lib/model/quant/Quote/Quote.models';
import { QuoteImplementation } from '@lib/model/quant/Quote/QuoteImplementation/QuoteImplementation';
import { type QuoteResolverModel } from '@lib/model/quant/Quote/QuoteResolver/QuoteResolver.models';
import { SecurityModel } from '@lib/model/quant/Security/Security.models';

@withContainer()
@withResolver({ Resource: () => Quote })
export class QuoteResolver
  extends createRelatedResourceResolver<QuoteModel, SecurityModel>({
    Resource: () => Quote,
    ResourceImplementation: QuoteImplementation,
    name: QUOTE_RESOURCE_NAME,
  })
  implements QuoteResolverModel {}
