import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { type EmbeddedResourceModel } from '@lib/model/resource/EmbeddedResource/EmbeddedResource.models';
import { EntityResource } from '@lib/model/resource/EntityResource/EntityResource';
import { DATA_TYPE } from '@lib/shared/data/data.constants';
import { PrimaryKeyModel } from '@lib/shared/resource/resource.models';

@withEntity({ isAbstract: true, isDatabase: true })
export class EmbeddedResource extends EntityResource implements EmbeddedResourceModel {
  @withField({ isDatabase: true, type: DATA_TYPE.STRING })
  _id!: PrimaryKeyModel;
}
