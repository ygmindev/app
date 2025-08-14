import { RefModel } from '@lib/backend/resource/utils/RefModel/RefModel.models';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withManyToOneField } from '@lib/backend/resource/utils/withManyToOneField/withManyToOneField';
import { QUOTE_RESOURCE_NAME } from '@lib/model/quant/Quote/Quote.constants';
import { type QuoteModel } from '@lib/model/quant/Quote/Quote.models';
import { Security } from '@lib/model/quant/Security/Security';
import { SECURITY_RESOURCE_NAME } from '@lib/model/quant/Security/Security.constants';
import { SecurityModel } from '@lib/model/quant/Security/Security.models';
import { EntityResource } from '@lib/model/resource/EntityResource/EntityResource';

@withEntity({
  isDatabase: true,
  name: QUOTE_RESOURCE_NAME,
})
export class Quote extends EntityResource implements QuoteModel {
  @withManyToOneField({ Resource: () => Security })
  [SECURITY_RESOURCE_NAME]!: RefModel<SecurityModel>;
}
