import { withDatabaseField } from '@lib/backend/resource/utils/withDatabaseField/withDatabaseField';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { SourcedEntityResourceModel } from '@lib/model/data/SourcedEntityResource/SourcedEntityResource.models';
import { EntityResource } from '@lib/model/resource/EntityResource/EntityResource';

@withEntity({ isAbstract: true })
export class SourcedEntityResource extends EntityResource implements SourcedEntityResourceModel {
  @withDatabaseField({ isOptional: true })
  source?: string;
}
