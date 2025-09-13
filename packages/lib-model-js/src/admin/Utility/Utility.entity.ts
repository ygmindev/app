import { withEmbeddedEntity } from '@lib/backend/resource/utils/withEmbeddedEntity/withEmbeddedEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { UTILITY_RESOURCE_NAME } from '@lib/model/admin/Utility/Utility.constants';
import { UTILITY_TYPE, type UtilityModel } from '@lib/model/admin/Utility/Utility.models';
import { EntityResource } from '@lib/model/resource/EntityResource/EntityResource';

@withEmbeddedEntity({ name: UTILITY_RESOURCE_NAME })
export class Utility extends EntityResource implements UtilityModel {
  @withField({ isDatabase: true, isOptional: true })
  description?: string;

  @withField({ isDatabase: true, isOptional: true })
  imageSrc?: string;

  @withField({ isDatabase: true })
  name!: string;

  @withField({ isDatabase: true, isOptional: true })
  pricing?: string;

  @withField({ isDatabase: true })
  type!: Array<UTILITY_TYPE>;

  @withField({ isDatabase: true, isOptional: true })
  url?: string;
}

export default Utility;
