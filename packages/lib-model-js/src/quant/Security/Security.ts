import { Collection } from '@lib/backend/core/utils/Collection/Collection';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { withOneToManyField } from '@lib/backend/resource/utils/withOneToManyField/withOneToManyField';
import { SourcedEntityResource } from '@lib/model/data/SourcedEntityResource/SourcedEntityResource';
import { Quote } from '@lib/model/quant/Quote/Quote';
import { QuoteModel } from '@lib/model/quant/Quote/Quote.models';
import { SECURITY_RESOURCE_NAME } from '@lib/model/quant/Security/Security.constants';
import { type SecurityModel } from '@lib/model/quant/Security/Security.models';
import { DATA_TYPE } from '@lib/shared/data/data.constants';

@withEntity({ isAbstract: true, name: SECURITY_RESOURCE_NAME })
export class Security extends SourcedEntityResource implements SecurityModel {
  @withField({ isDatabase: true, isOptional: true, type: DATA_TYPE.STRING })
  description?: string;

  @withOneToManyField({ Resource: () => Quote, root: SECURITY_RESOURCE_NAME })
  quotes?: Array<QuoteModel> = new Collection(this);
}
