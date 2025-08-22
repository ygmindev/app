import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { SourcedEntityResourceModel } from '@lib/model/data/SourcedEntityResource/SourcedEntityResource.models';
import { EntityResource } from '@lib/model/resource/EntityResource/EntityResource';

@withEntity({ isAbstract: true })
export class SourcedEntityResource extends EntityResource implements SourcedEntityResourceModel {
  @withField({ isDatabase: true, isOptional: true })
  source?: string;
}
