import { Collection } from '@lib/backend/core/utils/Collection/Collection';
import { CollectionModel } from '@lib/backend/core/utils/Collection/Collection.models';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { withOneToManyField } from '@lib/backend/resource/utils/withOneToManyField/withOneToManyField';
import { Quote } from '@lib/model/quant/Quote/Quote';
import { QUOTE_RESOURCE_NAME } from '@lib/model/quant/Quote/Quote.constants';
import { QuoteModel } from '@lib/model/quant/Quote/Quote.models';
import { SECURITY_RESOURCE_NAME } from '@lib/model/quant/Security/Security.constants';
import { type SecurityModel } from '@lib/model/quant/Security/Security.models';
import { EntityResource } from '@lib/model/resource/EntityResource/EntityResource';
import { DATA_TYPE } from '@lib/shared/data/data.constants';

@withEntity({
  isDatabase: true,
  name: SECURITY_RESOURCE_NAME,
})
export class Security extends EntityResource implements SecurityModel {
  @withOneToManyField({ Resource: () => Quote, root: SECURITY_RESOURCE_NAME })
  [QUOTE_RESOURCE_NAME]?: CollectionModel<QuoteModel> = new Collection(this);

  @withField({ isDatabase: true, type: DATA_TYPE.STRING })
  description!: string;
}
