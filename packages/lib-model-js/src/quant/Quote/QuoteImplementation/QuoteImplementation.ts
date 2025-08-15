import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { createRelatedResourceImplementation } from '@lib/backend/resource/utils/createRelatedResourceImplementation/createRelatedResourceImplementation';
import { Quote } from '@lib/model/quant/Quote/Quote';
import { QUOTE_RESOURCE_NAME } from '@lib/model/quant/Quote/Quote.constants';
import { type QuoteModel } from '@lib/model/quant/Quote/Quote.models';
import { type QuoteImplementationModel } from '@lib/model/quant/Quote/QuoteImplementation/QuoteImplementation.models';
import { SECURITY_RESOURCE_NAME } from '@lib/model/quant/Security/Security.constants';
import { SecurityModel } from '@lib/model/quant/Security/Security.models';
import { SecurityImplementation } from '@lib/model/quant/Security/SecurityImplementation/SecurityImplementation';

@withContainer()
export class QuoteImplementation
  extends createRelatedResourceImplementation<QuoteModel, SecurityModel>({
    Resource: Quote,
    RootImplementation: SecurityImplementation,
    name: QUOTE_RESOURCE_NAME,
    root: SECURITY_RESOURCE_NAME,
  })
  implements QuoteImplementationModel {}
