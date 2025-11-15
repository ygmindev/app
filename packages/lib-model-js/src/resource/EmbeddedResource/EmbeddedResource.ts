import { withDatabaseEntity } from '@lib/backend/resource/utils/withDatabaseEntity/withDatabaseEntity';
import { withDatabaseField } from '@lib/backend/resource/utils/withDatabaseField/withDatabaseField';
import { type EmbeddedResourceModel } from '@lib/model/resource/EmbeddedResource/EmbeddedResource.models';
import { EntityResource } from '@lib/model/resource/EntityResource/EntityResource';
import { DATA_TYPE } from '@lib/shared/data/data.constants';
import { PrimaryKeyModel } from '@lib/shared/resource/resource.models';

@withDatabaseEntity({ isAbstract: true })
export class EmbeddedResource extends EntityResource implements EmbeddedResourceModel {
  @withDatabaseField({ type: DATA_TYPE.STRING })
  _id!: PrimaryKeyModel;
}
