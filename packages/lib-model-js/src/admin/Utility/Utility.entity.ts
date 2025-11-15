import { withDatabaseField } from '@lib/backend/resource/utils/withDatabaseField/withDatabaseField';
import { withEmbeddedEntity } from '@lib/backend/resource/utils/withEmbeddedEntity/withEmbeddedEntity';
import { UTILITY_RESOURCE_NAME } from '@lib/model/admin/Utility/Utility.constants';
import { UTILITY_TYPE, type UtilityModel } from '@lib/model/admin/Utility/Utility.models';
import { EmbeddedResource } from '@lib/model/resource/EmbeddedResource/EmbeddedResource';

@withEmbeddedEntity({ name: UTILITY_RESOURCE_NAME })
export class Utility extends EmbeddedResource implements UtilityModel {
  @withDatabaseField({ isOptional: true })
  description?: string;

  @withDatabaseField({ isOptional: true })
  imageSrc?: string;

  @withDatabaseField()
  name!: string;

  @withDatabaseField({ isOptional: true })
  pricing?: string;

  @withDatabaseField({ isArray: true })
  type!: Array<UTILITY_TYPE>;

  @withDatabaseField({ isOptional: true })
  url?: string;
}

export default Utility;
