import { withDatabaseEntity } from '@lib/backend/resource/utils/withDatabaseEntity/withDatabaseEntity';
import { withDatabaseField } from '@lib/backend/resource/utils/withDatabaseField/withDatabaseField';
import { type EmbeddedResourceModel } from '@lib/model/resource/EmbeddedResource/EmbeddedResource.models';
import { EntityResource } from '@lib/model/resource/EntityResource/EntityResource';

@withDatabaseEntity({ isAbstract: true })
export class EmbeddedResource extends EntityResource implements EmbeddedResourceModel {
  @withDatabaseField()
  _id!: string;
}
